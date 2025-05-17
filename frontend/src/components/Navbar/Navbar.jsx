import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'


const Navbar = () => {

  const [menu,setMenu]=useState("home");


  return (
    <div className='Navbar flex justify-between items-center ' id='Navbar'>
       <img src={assets.logo} alt="" className='logo w-[150px]' />

       <ul id='navbar-menu ' className="flex gap-7 listyle-none text-[18px] cursor-pointer text-[#49557e]">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""} >home</li >
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""} >menu</li > 
        <li onClick={()=> setMenu("mobile-app")} className={menu==="mobile-app"?"active":""} >mobile-app</li>
        <li onClick={()=> setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</li>
       </ul>

       <div className=" flex gap-5 items-center" id='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className="navbar_search_icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button id='navbar_button' className='bg-transparent text-lg border-1 border-[#a82d49]   '>Sign in</button>
       </div>
    </div>
  )
}

export default Navbar;