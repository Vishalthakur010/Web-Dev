import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";


const Home = () => {

    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false)
    const [posts, setPost] = useState([])

    async function fetchProductdata() {
        setLoading(true)
        try {
            const res = await fetch(API_URL)
            const data = await res.json()

            setPost(data)
        }
        catch (error) {
            console.log("error in fetching API ", error)
            setPost([])
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchProductdata()
    }, [])

    return (
        <div>
            {
                loading ? (<Spinner />) :
                    posts.length > 0 ?
                        (
                            <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 space-y-10 mx-auto space-x-5 min-h-[80vh]">
                                {
                                    posts.map( (post)=> (
                                        <Product key={post.id} post={post}/>
                                    ))
                                }
                            </div>
                        ) :
                        <div className="h-screen flex items-center justify-center">
                            <p>Post not found</p>
                        </div>
            }
        </div>
    )
}

export default Home