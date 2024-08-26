import React, { useState } from 'react'

function App() {

  let array = [
    {
      title:"Surya Namaskar",
      desc : "Subah subah karna chahiye"
    },
    {
      title:"Sham Namaskar",
      desc : "Sham me karna chahiye"
    },
    {
      title: "Ratri Namaskar",
      desc : "Ratri Me karna chahiye"
    }
  ]

  let [arrayy,setArrayy] = useState(array);

  return (
    <div>
      <h1>Todo-List</h1>
      <Todo array={arrayy}/>
      <AddTodo arrayy={arrayy} setArrayy={setArrayy}/>
    </div>
  )
}


function AddTodo({arrayy,setArrayy}){

  let [inp1,setInp1] = useState("")
  let [inp2,setInp2] = useState("")

  function changeInp1(e){
    setInp1(e.target.value);
  }

  function changeInp2(e){
    setInp2(e.target.value);
  }

  function handleClick(){
    setArrayy([...arrayy, {title:inp1, desc: inp2}]) // array ke last me input se jo title and desc hum dalenge wo add ho jayegi
  }

  return (
    <div>
      {/* There are three events onChange,onChange,onClick */}
      <input onChange={changeInp1} type="text" value={inp1} />
      <input onChange={changeInp2} type="text" value={inp2} />
      <button onClick={handleClick}>Add Todo</button> 
    </div>
  )

}

function Todo({array}){ // array ko argument me catch karne ke liye as an object catch karna hai (destructuring)

  return (
    array.map((item,index)=>{
      return (
        <div key={index} style={{border:"2px solid black", margin:"5px"}}>
          <h3>Title : {item.title} </h3>
          <p>Description : {item.desc} </p>
        </div>
      )
    }) 
  )
}

export default App
