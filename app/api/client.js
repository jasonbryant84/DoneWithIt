import { create } from 'apisauce'
import cache from '../utility/cache'
import authStorage from '../auth/storage'
import settings from '../config/settings'

// Checkout Firebase and/or Realm if you need to store User Actions when Offline

const apiClient = create({
    baseURL: settings.apiUrl,
})

apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToken()
    if(!authToken) return 
    request.headers["x-auth-token"] = authToken
})

// Re-implementing get method
const get = apiClient.get
apiClient.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig)

    // If response fro server then cache and return response
    if(response.ok) {
        cache.store(url, response.data)
        return response
    }

    // Else check cache for data or return response error
    const data = await cache.get(url)
    return data ? { ok: true, data } : response
}

export default apiClient