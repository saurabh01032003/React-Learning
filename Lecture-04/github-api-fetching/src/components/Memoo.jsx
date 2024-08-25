import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

function Memoo() {
    let [count,setCount] = useState(0)
    let [inp,setInput] = useState(0);
    function handleInput(e){
        setInput(e.target.value) // inp variable me jo value tumne input kara hai wo aa jayega
    }
    // function handleClick(){
    //     setCount(count+1);
    // }
    // let sum = 0;
    // for(let i = 1;i <= inp;i++){ // inp tak ka sum : loop laga kar calculate kara hai
    //     sum += i;
    // }

    //-----------useMemo()=> prevents rerendering
    let myAns = useMemo(()=>{
        let sum = 0;
        for(let i = 1;i <= inp;i++){ // inp tak ka sum : loop laga kar calculate kara hai
            sum += i;
        }
        return sum;
    },[inp]) // we want ki input(value) change hone se dubara re-calculate(not re-render) na ho, isliye dependency array me inp state dala hai

  return (
    <div>
        {/* Onchange ek event hai */}
        <input onChange={handleInput} type="number" value={inp}></input> 
        {/* <h1>Sum : {sum} </h1> */}
        <h1>Sum : {myAns} </h1>
        <button onClick={()=>setCount(count+1)}>Counter : {count}</button>
    </div>
  )
}

export default Memoo