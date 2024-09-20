import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

function Memoo() {
    let [count,setCount] = useState(0)
    let [inp,setInput] = useState(0); // agar koi bhi cheez change ho rahi hoti hai toh uske liye hum useState banate hai
    
    function handleInput(e){
        setInput(e.target.value) // inp variable me jo value tumne input kara hai wo aa jayega
    }
    
    // // Button ke click hone pr bhi handleCount chal raha tha -> because whenever there is change in state the whole componenet rerenders
    
    // let sum = 0;
    // for(let i = 1;i <= inp;i++){ // inp tak ka sum : loop laga kar calculate kara hai
    //     sum += i;
    //     console.log(sum);
    // }

    // //-----------useMemo()=> ek component me do props hai(count,inp) but hum chahte hai ki ek ke hi change(inp) hone pe pura component rerender ho naki dono prop(i.e inp,button) ke change hone pr
    let myAns = useMemo(()=>{
        let sum = 0;
        for(let i = 1;i <= inp;i++){ // inp tak ka sum : loop laga kar calculate kara hai
            sum += i;
            console.log(sum);
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
