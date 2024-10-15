import { useState } from "react";
import './App.css'

function App () {
  // eslint-disable-next-line no-unused-vars
  let [ counter, setCounter ] = useState( 15 )
  console.log( "Current Value", counter )
  //let counter = 15
  const addValue = () => {
    //console.log( "Current Value", counter )
    //counter = counter + 1
    setCounter( counter + 1 )
    //console.log( "New Value", counter )
  }
  const removeValue = () => {
    setCounter( counter - 1 )
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
