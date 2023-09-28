import {API_KEY, API_URL} from './settings'

const fromApiResponseToGifs = apiResponse => {
    const { data = [] } = apiResponse
    if (Array.isArray(data)) {
        const gifs = data.map(image => {
            const {images, title, id} = image
            const {url} = images.fixed_height
            return {title, id, url}
        })
        return gifs
    }
    return []
}

export default function getGifs({
    limit= 10,
    keyword = 'morty',
    rating = 'g',
    page = 0,
} = {}) {
    
    const urlAPI = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
        page * limit
      }&rating=${rating}&lang=en`
    
    return fetch(urlAPI)
        .then((res) => res.json())
        .then(fromApiResponseToGifs)
           
}