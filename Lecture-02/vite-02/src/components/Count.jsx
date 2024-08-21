
import React from 'react'
import { useState } from 'react'

let count = 0;
function Count() {
    let [temp, setCount] = useState(count);
    function increment(){
        setCount(temp+1);
        console.log(temp);
    }
    function decrement(){
        setCount(temp - 1);
        console.log(temp);

    }
  return (
    <div>
        <h1>Count : {temp} </h1>
        <button onClick={decrement}>-</button>
        &nbsp; 
        Count
        &nbsp;
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Count