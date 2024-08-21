// import React from 'react'

// function Random(){
//     let rn = Math.floor(Math.random()*10);

//     let el;
//     if(rn === 7){
//         el = <h1>You have won Lucky Seven Game. it's {rn} </h1>
//     }else{
//         el = <h1>You lost it's {rn} </h1>
//     }

//     return (
//         <div>
//             {/* <h1>Random Number is : {rn} </h1> */}
//             {el}
//         </div>
//     )
// }

// export default Random


// ----------------------Alternate Way (we use)

import React from 'react'

function Random() {
  return (
    // ternary operator is an expression not statement (if-else statements thee)
    <div>
        {
            // ternary operator
            (Math.floor(Math.random()*10) === 7) ? <h1>Winner</h1> : <h1>Looser</h1>
        }

    </div>
  )
}

export default Random




