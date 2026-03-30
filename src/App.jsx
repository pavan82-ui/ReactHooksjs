import './App.css'
import { DataFetching } from './components/DataFetching'
import { HookCounterOne } from './components/HookCounterOne'
import { HookMouse } from './components/HookMouse'
import { IntervalHookCounter } from './components/IntervalHookCounter'
import { MouseContainer } from './components/MouseContainer'
   
function App() {
 
  return (
    <>
       {/* <HookCounterOne></HookCounterOne>
       <HookMouse></HookMouse> */}
       {/* <MouseContainer></MouseContainer> */}
       <IntervalHookCounter></IntervalHookCounter>
       <DataFetching></DataFetching>
    </>
  )
}

export default App
