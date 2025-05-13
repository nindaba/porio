import React from 'react'
import logo from './logo.svg'

function App() {
  return (
    <>
      <div className="bg-gray-20 flex h-screen items-center justify-center bg-gray-900">
        <span className="text-3xl font-bold text-green-500 underline">
          Hello world!
          <img src={logo} className="App-logo" alt="logo" />
        </span>
      </div>
      <h1 className="text-white-900 text-3xl font-bold text-green-500">
        Hello world!
      </h1>
    </>
  )
}

export default App
