import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setshowLogin}) => {
    const [currState,setcurrState]=useState("Sign Up")
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
                <div className="login-popup-inputs">
                    {currState==="Login"?<></>:<input type="text" placeholder='Your name ' required /> }
                    
                    <input type="text" placeholder='Your email' required />
                    <input type="text" placeholder=' Your password' required />
                </div>
                <button>{currState==="Sign Up"?"create account":"Login"}</button>
                <div className="logib-popup-conditaion">
                    <input type="checkbox" required />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, adipisci.</p>
                </div>
                <p>create anew acount? <span>Click here</span></p>
                <p>already have an acount? <span>Login here</span></p>

        </form>
    </div>
  )
}

export default LoginPopup