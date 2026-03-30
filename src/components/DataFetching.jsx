import axios from "axios"
import { useEffect, useState } from "react"

export const DataFetching = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])
    return (
        <>
        <button onClick={() => setIdFromButtonClick(id)}>Fetch Post</button>
        <input type="text" value={id} onChange={(e)=> setId(e.target.value)} />
            <div>{post.title}</div>
         {/* {
            post.map(post => <div key={post.id}>{post.title}</div>)
         } */}
        </>

    )
}