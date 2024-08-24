import React, { useState } from 'react'


function Head(props){ 
    return (
        <div>
            <h1>Name : {props.name}</h1>
        </div>
    )
}

function Badahead(props){ // ishme as  a props => name : "Samarth" aayega
    let [naam, setNaam] = useState(props.name);
    function handleClick(){
        setNaam(Math.floor(Math.random()*10));
    }

    return (
        <div>
            <button onClick={handleClick}>Change name of BadaHead</button>
            <Head name={naam}/>
        </div>
    )

}

// Note : Hame ye chahte hai ki Badahead me button click karne pr pura code rerender na ho , isliye hamne Head ko alag kar diya hai
// Now, on clicking button only Badaead wala function hi re-render hoga 

function Sam() {
  return (
    <div>
        <Badahead name="Samarth"/>
        <Head name= "Mayank"/>
    </div>
  )
}

export default Sam