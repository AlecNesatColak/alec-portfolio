import React from 'react'

const Login = () => {
  return (
    <div>
        <div>
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" placeholder="Enter Username" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login