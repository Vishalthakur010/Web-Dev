import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import useGif from '../hooks/useGif'

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY

const Random = () => {

    // const [gif, setGif] = useState("")
    // const [loading, setLoading] = useState(false)

    // async function fetchData() {
    //     try {
    //         setLoading(true)
    //         const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    //         const { data } = await axios.get(url)
    //         const imageSource = data.data.images.original.url
    //         // const imageSource = data.data.images.downsized_large.url + `?t=${Date.now()}`
    //         setGif(imageSource)
    //         console.log("Fetched GIF URL:", imageSource);
    //         setLoading(false)
    //     }
    //     catch (error) {
    //         console.error("Error fetching the GIF:", error);
    //     }
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])


    const {gif, loading, fetchData} =useGif()

    return (
        <div className='bg-green-500 w-1/2 border border-black rounded-lg flex flex-col items-center gap-4'>
            <h1 className='text-2xl font-medium underline '>A Random GIF</h1>
            {
                loading ? (<Spinner />) : (<img src={gif} width={450} />)
            }
            {/* <img src={gif} width={450}/> */}
            <button
                onClick={()=> fetchData()}
                className='bg-white w-8/12 rounded-lg py-[6px] mb-[10px] font-medium opacity-70'>
                GENERATE
            </button>
        </div>
    )
}

export default Random