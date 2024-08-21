
// Q. You have to change name(in argument) on clicking button logout
// import React from 'react'

// function Person({name}) {

//     let newName = name;
//     function handle(){
//         console.log(newName);
//         newName = "anonymous";
//         console.log(newName);
//     }
    
//   return (
//     <div>
//         <h1>Name : {newName}</h1>
//         <button onClick={()=>handle()}>Logout</button>
//     </div>
//   )
// }

// export default Person

// // Problem in above : name will not change on main page(don't see console : ushme to whi print hoga jo tum karwa rahe)


// ----------------------Correct Way
// useState : it is a hook (function) -> isko run karenge argument me initial value denge jo hame change karna hai

import React, {useState} from 'react'

function Person({name}) {
    let [username, setUsername] = useState(name); // it returns an array containing two elements -> 1st element is variable name, 2nd function to change variable
    
    function handleLogout(){
        console.log("before : " ,username)

        // setUsername() : ye function last me chalega (before after wala part console hone ke baad (like setTimeOut)) 
        setUsername("anonymous") // asynchronous task => last me perform hoga (console me dikhega inspect karke dekh lo)
        console.log("After : " ,username)
    }

  return (
    <div>
        {/* Click karne pr variable userName ka me : "anonymous assign ho gaya hai" */}
        <h1>Name : {username}</h1> 
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Person