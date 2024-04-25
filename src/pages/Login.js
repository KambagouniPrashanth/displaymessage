import React, { useContext } from 'react'
import UserProvider, { UserContext } from '../context/UserContext'

function Login() {
  const{login}=useContext(UserContext)
  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login