import React from 'react';
import './register.scss'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Get Onboard.</h1>
                     <p>Please fill out the form below to create your account and join our community.</p>
                    <span>Already have an account? </span>
                    <Link to="/login" style={{ textDecoration: 'none', color: 'inherit',display: 'block', width: '100%'  }}>  
                      <button>Login.</button>
                      </Link>
                 </div>
                 <div className="right">
                     <h1>Register.</h1>
                    <form>
                         <input type="text" placeholder="Username" autocomplete="off"/>
            <input type="email" placeholder="Email" autocomplete="off"/>
            <input type="password" placeholder="Password" autocomplete="off"/>
            <input type="text" placeholder="Name" autocomplete="off"/>
                         <button>Register.</button>
                          {/* <span>Forgot Password?</span> */}
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Register