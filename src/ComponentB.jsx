
import { useContext } from "react";
import { userContext, channelContext } from "./ComponentA";

export const ComponentB = () => {
  const user = useContext(userContext);
  const channel = useContext(channelContext);
    return (
        <div>
        <h1>component B</h1>

            {user} - {channel}
        </div>
    )
}