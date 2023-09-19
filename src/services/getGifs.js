const apiKey = 'YDBESOZ2zBkHcZ8EkF6gDs2ChZngeloI'


export default function getGifs({keyword = 'morty'} = {}) {
    
    const urlAPI = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    
    return fetch(urlAPI)
        .then(res => res.json())
        .then(response => {
            const { data = [] } = response
            if (Array.isArray(data)) {
                const gifs = data.map(image => {
                    const {images, title, id} = image
                    const {url} = image.images.fixed_height
                    return {title, id, url}
                })
                return gifs
            }
        })
}