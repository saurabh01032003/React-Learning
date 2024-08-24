
// import React, { useState } from 'react'

// function Interview() {
//     let [count, setCount] = useState(0);

//     // Batcing 
//     function handleClick(){
//         setCount(count+1); // async task (baad me kardunga 0->1)
//         setCount(count+1); // async task (baad me kardunga 0->1)
//         setCount(count+1); // async task (baad me kardunga 0->1)

//     // teeno baar setCount initial value pr hi chalega i.e 0 and increment karke output 1 produce karega (naki 3) : This concept is called batching
//     }

//   return (
//     <div>
//         <h1>Count : {count} </h1>
//         <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }

// export default Interview

// -------------------Upar wali cheez se bachne ke liye 

import React, { useState } from 'react'

function Interview() {
    let [count, setCount] = useState(0);

    function handleClick(){
        setCount((count) => count+1); // previous change ka hold rakhta hai in call back function
        setCount((count) => count+1); 
        setCount((count) => count+1);
    }
    // Now on pression button once -> you will get your count value incremented to '3' from '0'

  return (
    <div>
        <h1>Count : {count} </h1>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Interview