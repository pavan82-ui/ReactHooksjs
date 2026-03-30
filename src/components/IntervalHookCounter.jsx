import { useEffect, useState } from "react"



export const IntervalHookCounter = () => {
    const [count, setCount] = useState(0)
    // const tick=()=>{
    //     console.log('tick')
    //     setCount(count+1)
    // }
    // useEffect(() => {
    //     const interval = setInterval(tick, 1000)
    //     return () => {
    //         clearInterval(interval)
    //     }
    // },[count])

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        <>
            {count}
        </>
    )

}
