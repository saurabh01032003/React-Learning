import React from 'react'

function Event() {

    function handleClick(){
        console.log("Hello from without argument")
    }

    function handleClick2(a){
        console.log(`pressed button argument is ${a}`)
    }



  return (
    <div>
        {/* After pressing button handleclick function will invoked : in below method function can't accept any argument */}
        <button onClick={handleClick}>Press me!</button>

        {/* Follow below method */}
        {/* In below we can pass any argument to function which is getting invoked during even */}
        <button onClick={()=>handleClick2(100)}>Press me 2!</button>
    </div>
  )
}

export default Event