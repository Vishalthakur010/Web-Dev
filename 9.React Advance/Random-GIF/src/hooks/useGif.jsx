import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'


const API_KEY = import.meta.env.VITE_GIPHY_API_KEY
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
// const tagMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`


const useGif = (tag) => {
    const [gif, setGif] = useState("")
    const [loading, setLoading] = useState(false)

    async function fetchData() {
        try {
            setLoading(true)
            const { data } = await axios.get(tag ? `${url}&tag=${tag}`: url ) 
            const imageSource = data.data.images.original.url
            setGif(imageSource)
            setLoading(false)
        }
        catch (error) {
            console.error("Error fetching the GIF:", error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return{gif, loading, fetchData}

}

export default useGif