
// import React from 'react';

// function Props(props){
//     console.log(props,"Props hai ye"); // console me dekhoge toh props : as an object dikhega (i.e {name: 'Saurabh', id: '151'} 'Props hai ye')

//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <h1>{props.id}</h1>
//         </div>
//     )
// }

// export default Props


// ------------------------Another Way
function Props({name,id}){ // argument me object aa raha toh yhi destructure kardo

    return (
        <div>
            <h1>{name}</h1>
            <h1>{id}</h1>
        </div>
    )
}

export default Props;