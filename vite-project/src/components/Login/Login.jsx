import React from 'react'

const Login = () => {
    const userName = "Jared"
    const element = <h2 className="login-message">Welcome, {userName}</h2>

    return (
    <div>
        {element}
    </div>
  )
}

export default Login
