
import React, { useState } from 'react'

function MyMemo({name}){
    return (
        <div>
            <h1>Name : {name}</h1>
        </div>
    )
}

function Memoo() {
    let [title,setTitle] = useState('Sammy Boi')

    function handleClick(){
        setTitle(Math.floor(Math.random()*10));
    }

  return (
    <div>
        <MyMemo name={title} />
        <button onClick={handleClick}>Change Above</button>
        <MyMemo name="lollipop2" />
        <MyMemo name="lollipop3" />
        <MyMemo name="lollipop4" /> 
    </div>
  )
}

export default Memoo