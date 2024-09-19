import React from 'react'

function Cat() {
  // Statements : Contains if,else, switch, for...etc
  let a = 10;
  let b = "Saurabh";

  let c = true;
  let d = false;
  let e = "undefined"; // must pass in string -> as undefined datatype can't be calculated
  let f = null;
  
  let obj = {a: 10, b: "Sam"};
  
  let arr = [10,20,30,40];
  // Expressions : Single Value as output
  return (
    <div>
      <h1>a : {a} </h1>
      <h1>b : {b} </h1>
      {/* Boolean values are statements : inko dekhne ke liye string me convert kardo */}
      <h1>c : {JSON.stringify(c)} </h1>
      <h1>d : {JSON.stringify(d)} </h1>
      <h1>e : {JSON.stringify(e)} </h1>
      <h1>e : {e} </h1> 
      {/* Undefined value can't be calculate in either way */}

      <h1>f : {JSON.stringify(f)} </h1>

      {/* Hum objects ko directly show nahi kar sakte using {o} ❌ */}

      <h1>obj : {obj.a} </h1>
      <h1>obj : {obj.b} </h1>
      {/* Object ki sirf values dikhane ke liye */}
      <h1>Values  of object : {Object.values(obj)} </h1>
      {/* Object ki sirf key dikhane ke liye */}
      <h1>Values  of object : {Object.keys(obj)} </h1>
      <h1>obj : { arr } </h1>

      {/* both syntax are correct for accessing array element */}
      <h1>obj : { arr[0] } </h1>
      <h1>obj : { arr['1'] } </h1>

    </div>
  )
}

export default Cat