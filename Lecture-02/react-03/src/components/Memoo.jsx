
import React, { memo, useState } from 'react'

// Normal function call hone se 
// function MyMemo({name}){
//     return (
//         <div>
//             <h1>Name : {name}</h1>
//         </div>
//     )
// }


// due to memo function jis prop me change hua hai bus whi re-render hoga
let MyMemo = memo(function({name}){
    return (
        <div>
            <h1>Name : {name}</h1>
        </div>
    )
})

function Memoo() {
    let [title,setTitle] = useState('Sammy Boi')

    function handleClick(){
        setTitle(Math.floor(Math.random()*10));
    }

  return (
    <div>
        {/* sirf ishi me prop change hua hai from 'Sammy Boi' to random numbers */}
        <MyMemo name={title} /> 
        <button onClick={handleClick}>Change Above</button>
        <MyMemo name="lollipop2" />
        <MyMemo name="lollipop3" />
        <MyMemo name="lollipop4" /> 
    </div>
  )
}

export default Memoo