import { useState } from "react"

 

export const HookCounterthree = () => {
  const [name, setName] = useState({
    firstname:'',
    lastname:''
  }) 


  return(
    <>
    <form>
        <input type="text"  value={name.firstname}  onChange={(e)=>setName({...name, firstname:e.target.value})}></input>
                <input type="text"  value={name.lastname}  onChange={(e)=>setName({...name, lastname:e.target.value})}></input>

    </form>
    <h2>your first name is:{name.firstname}</h2>
    <h2>your last name is:{name.lastname}</h2>
    {JSON.stringify(name)}
    </>
  )
}