import React from 'react'
import GithubUsers from './components/GithubUsers'
import Memoo from './components/Memoo'

function App() {
  return (
    <div>
      {/* <GithubUsers username="samarth0606" /> */}
      {/* <GithubUsers use/>rname="hrs148"/> */}
      {/* <GithubUsers username="saurabh01032003"/> */}

      <Memoo/>
    </div>
  )
}

export default App

// https://api.github.com/users/saurabh01032003 (api to fetch user info from github)