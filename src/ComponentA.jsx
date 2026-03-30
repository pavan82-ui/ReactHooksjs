import React, { createContext } from "react"
import { ComponentB } from "./ComponentB";

 
export const userContext = React.createContext();
export const channelContext = React.createContext();

export const ComponentA = () => {
    return (
        <div>
           <userContext.Provider value={'Pavan'}>
            <channelContext.Provider value={'Kumar'}>
                <ComponentB />
            </channelContext.Provider>
           </userContext.Provider>
        </div>
    )
}