import React from 'react'
import logo from './logo.svg'
import './App.css'
import * as D from './data'
import type {DragEvent} from 'react'

const App = (e: any) => {
  const onDragStart = (e: DragEvent<HTMLElement>) =>
    console.log('onDragStart', e.dataTransfer)
  const onDragEnd = (e: DragEvent<HTMLElement>) =>
    console.log('onDragEnd', e.dataTransfer)

  const onDragOver = (e: DragEvent) => e.preventDefault()
  const onDrop = (e: DragEvent) => {
    e.preventDefault()
    console.log('onDrop', e.dataTransfer)
  }

  return (
    <div className="App">
      <p>DragDrop</p>
      <div draggable onDragStart={onDragStart} onDragEnter={onDragEnd}>
        <h1>Drag Me</h1>
      </div>
      <div onDrop={onDrop} onDragOver={onDragOver}>
        <h1>Drop over Me</h1>
      </div>
    </div>
  )
}

export default App
