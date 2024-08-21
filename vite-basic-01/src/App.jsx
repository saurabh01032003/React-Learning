import React from 'react'

// named export ke case me hume destructure karna padega (i.e Mummy, Papa are named export)
// also named export same name se import bhi honge 
// while default import jis naam se karoge usi naam se niche calling ke time use karna
import Personnn, {Mummy,Papa} from './components/Person'

// import export(es-6)


function App() {
  return (
    <div>

        {/* Way of calling components */}
        {/*1.  <Person></Person> */}
        {/* 2. Self closing tag(generally used) */}

        {/* Default component kisi bhi naam se import ho sakta  */}
        <Personnn/> 
        <Papa/>
        <Mummy/>
        <h1>Hello from react</h1>
    </div>
  )
}

export default App