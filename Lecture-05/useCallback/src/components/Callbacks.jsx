import React from 'react'
import { memo } from 'react';
import { useCallback } from 'react';
import { useState  } from 'react'

function Callbacks() {
    let [counter,setCounter] = useState(0);

    // let a = 1; // variable 
    function handleClick(){
        setCounter(counter+1);
    }
    // ----------
    let a = useCallback(function(){
        console.log("Hello Kanha");
    },[])
  return (  
    <div>
        {/* button click karne par dono Component/function(Demo) bhi re-render ho raha aur button bhi */}
        <Demo b={a} />
        <button onClick={handleClick}>Click : {counter} </button>
    </div>
  )
}

// function Demo({b}){
//     return (
//         <div>
//             hello-{b}
//         </div>
//     )
// }

// ab ye function baar-baar re-render nahi hoga on clicking button
let Demo = memo(function({b}){
    return (
        <div>
            hello-{b()}
        </div>
    )
})

export default Callbacks