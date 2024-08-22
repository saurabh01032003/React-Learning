
import React, { useState } from 'react';

function Counter(){
    let [counter,setCount] = useState(0);
   
    function handleIncrement(){
        setCount(counter+1);
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}

export default Counter