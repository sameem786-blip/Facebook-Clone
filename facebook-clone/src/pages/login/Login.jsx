import React from 'react';
import './login.scss'

const Login = () => {
  return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Welcome Back.</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <span>Don't have an account? </span>
                    <button>Register.</button>
                 </div>
                 <div className="right">
                     <h1>Login.</h1>
                    <form>
                         <input type="text" placeholder="Username" />
                         <input type="password" placeholder="Password" />
                         <button>Login.</button>
                          {/* <span>Forgot Password?</span> */}
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Login