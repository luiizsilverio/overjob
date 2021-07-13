import { useState } from 'react'

function login() {
  const [counter, setCounter] = useState(0)

  function handleCounter() {
    setCounter((oldState) => oldState + 1)
  }

  return (
    <>
      <h1>Login</h1>
      <button
        onClick={handleCounter}
      >
        {counter}
      </button>
    </>
  )
}

export default login
