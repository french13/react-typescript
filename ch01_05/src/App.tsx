import React from 'react'
import logo from './logo.svg'
import './App.css'
import * as D from './data'

const App = () => {
  return (
    <div className="App">
      <p>{D.randomName()}</p>
      <img src={D.randomAvatar()} height="50" />
    </div>
  )
}

export default App
