import React, { useEffect, useState } from 'react'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem("is-logged-in")
    if (dataFromLocalStorage) {
      setIsLoggedIn(JSON.parse(dataFromLocalStorage))
    }
  }, [setIsLoggedIn])

  
  useEffect(() => {
    localStorage.setItem("is-logged-in", JSON.stringify(isLoggedIn))
  }, [isLoggedIn])



  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn)
  }
  return (
    <div className="center">
      <p>Hey, you are currently {isLoggedIn ? "Logged in" : "Logged out"}</p>
      <button className="btn" onClick={handleClick}>
        {isLoggedIn ? "Please log out" : "Please log in"}
      </button>
    </div>
  )
}

export default App
