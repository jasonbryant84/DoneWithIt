// API layer
import client from './client'

const endpoint = '/listings'

const getListings = () => client.get(endpoint)

const addListing = (listing, onUploadProgress) => {
    // client.post(endpoint)

    const data = new FormData() // under the hood content-type 'multipart/form-data'
    data.append('title', listing.title)
    data.append('price', listing.price)
    data.append('categoryId', listing.category.value)
    data.append('description', listing.descprition)

    listing.images.forEach((image, index) => 
        data.append('images', {
            name: 'image' + index,
            type: 'image/jpeg',
            uri: image
        })    
    )

    if(listing.location)
        data.append('location', JSON.stringify(listing.location))

    return client.post(endpoint, data, {
        // Parent > Child: "raising an event"
        onUploadProgress: progress => 
            onUploadProgress(progress.loaded / progress.total)
    })
}

export default {
    getListings,
    addListing,
}