import React from 'react'
import logo from '../img/tgfp_logo.png'
import cooking from '../img/cooking.png'
import "../css/login.css"

function Login() {
  return (
    <>
      <div className='login'>
        <div className='loginData'>
          <img src={cooking} alt='' />
        </div>
        <div className='loginForm'>
          <img src={logo} alt='logo' className='loginLogo' />
          <div className='everyLogin'>
            <h1>Welcome Back :)</h1>
            <small><span id="error" style={{ color: 'red' }}><b></b></span></small>
            <form>
              {/* <p>Email ID</p> */}
              <input className='my-5' type="text" placeholder="Enter Email ID" id="email" />
              {/* <p>Password</p> */}
              <input type="password" placeholder="Enter Password" id="password" />
              <button type="button" onclick="login()" >Log In</button>
              <a href='#'>Don't have an account?</a>
              <a href='#'>Forgot Password?</a>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login