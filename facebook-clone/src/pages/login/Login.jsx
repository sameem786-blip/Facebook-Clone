import React from 'react';
import './login.scss'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Welcome Back!</h1>
                     <p>Please log in to your account to access your dashboard and interact with our platform.</p>
                    <span>Don't have an account? </span>
                    <Link to="/register" style={{ textDecoration: 'none', color: 'inherit',display: 'block', width: '100%'  }}>
                        <button>Register.</button>
                    </Link>
                 </div>
                 <div className="right">
                     <h1>Login.</h1>
                    <form>
                         <input type="text" placeholder="Username"/>
                         <input type="password" placeholder="Password"/>
                         <button>Login.</button>
                          {/* <span>Forgot Password?</span> */}
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Login