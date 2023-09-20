import React, { useState } from 'react';
import './register.scss'
import { Link } from 'react-router-dom';
import axios from "axios";

const Register = () => {

    const [inputs, setInputs] = useState({
        username : "",
        email : "",
        password : "",
        name : "",
    })
    const [err, setErr] = useState(null)

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8800/api/auth/register", inputs)
        }
        catch (err){
            setErr(err.response.data.error)
        }
    }
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
                      <input type="text" placeholder="Username" autocomplete="off" name='username' onChange={ handleChange } />
            <input type="email" placeholder="Email" autocomplete="off"name='email' onChange={ handleChange }/>
            <input type="password" placeholder="Password" autocomplete="off"name='password' onChange={ handleChange }/>
                      <input type="text" placeholder="Name" autocomplete="off" name='name' onChange={handleChange} />
                      {err && err}
                         <button onClick={handleClick}>Register.</button>
                          {/* <span>Forgot Password?</span> */}
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Register