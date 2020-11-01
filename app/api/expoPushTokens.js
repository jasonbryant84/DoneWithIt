import client from "./client"

const register = async ({ data }) =>
  client.post("/expoPushTokens", { token: data })

export default {
  register,
}
