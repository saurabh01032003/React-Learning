import React, { useState } from 'react'

function Random() {
    let [naam, setNaam] = useState('Saurabh');
    
    function handleName(){
        setNaam(Math.floor(Math.random()*10));
    }

  return (
    <div>
        <h1>Name: {naam}</h1>
        <button onClick={handleName}>Change the name to number</button>
    </div>
  )
}

export default Random