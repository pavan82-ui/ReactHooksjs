import { useState } from "react"
import { HookMouse } from "./HookMouse"

 
export const MouseContainer = () => {
    const [display, setDisplay] = useState(true)
    return (
        <>
            <button onClick={() => setDisplay(!display)}>Toggle Mouse</button>
            {display && <HookMouse />}
        </>
    )
}