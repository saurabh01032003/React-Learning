import React from 'react'
import Person from './components/Person'
import Counter from './components/Counter'
import Random from './components/Random'
import Sam from './components/Sam'
import Memoo from './components/Memoo'
import Interview from './components/Interview'
import { Fragment } from 'react'

function App() {
  return (
    // <>
    //     <h1>App</h1>
    //     <h1>Hello</h1>
    //     <h1>Hello2</h1>
    //     <Person/>
    // </>

    // To avoid nesting of extra <div> use either only opening or closing brackets or use <Fragment> tag instead of <div>

    <Fragment>
        {/* <Counter/> */}
        {/* <Random/> */}
        <Sam/>
        {/* <Memoo/> */}

        {/* <Interview/> */}
    </Fragment>
  )
}

export default App