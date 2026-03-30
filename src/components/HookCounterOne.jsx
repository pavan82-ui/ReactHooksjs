import { useEffect } from "react"
import { useState } from "react"



export const HookCounterOne = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    }, [count])
    return (
        <>
            <div>
                <button onClick={() => setCount(count + 1)}>Click {count} times</button>
            </div>
        </>
    )
}
