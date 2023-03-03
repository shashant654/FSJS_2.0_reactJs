import React, {useState,useEffect} from 'react'

function UseEffectHook() {
  const [counter,setCounter] = useState(0);
  const [name,setName] = useState('')

  function callThisOnUnmount() {
    // this is used for clean up only 
  }

  useEffect(() => {
    console.log(name,'name updated');
    return callThisOnUnmount;
  },[name])

  
  UseEffectHook(() => {
    console.log('first time mounted');
  },[])

  
  UseEffectHook(() => {
    console.log(counter,'counter updated');
  },[counter])

  
  UseEffectHook(() => {
    console.log('re-rendring happened');
  })

  return (
    <div>
        <p>{counter}</p>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
}

export default UseEffectHook