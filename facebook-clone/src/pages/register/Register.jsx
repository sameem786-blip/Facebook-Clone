import React from 'react';
import './register.scss'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Get Onboard.</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <span>Already have an account? </span>
                    <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>  
                      <button>Login.</button>
                      </Link>
                 </div>
                 <div className="right">
                     <h1>Register.</h1>
                    <form>
                         <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
                         <button>Register.</button>
                          {/* <span>Forgot Password?</span> */}
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Register