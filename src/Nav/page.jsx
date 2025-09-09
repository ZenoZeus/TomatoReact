"use client"
import React, { useState } from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'

import { assets } from "../assets/frontend_assets/assets.js"
const Nav = () => {

  const [menu, setMenu] = useState("home")

  return (
    <>
    <div className="nav">
       <img src={assets.logo} alt="" />
    <ul className="navMenu">
      <li  onClick={()=>{setMenu("home")}} className={menu==="home"?"active":""}>
        <Link to="/">Home</Link>
      </li>
      <li  onClick={()=>{setMenu("menu")}} className={menu==="menu"?"active":""}>Menu</li>
      <li  onClick={()=>{setMenu("mobile")}} className={menu==="mobile"?"active":""}>
        <Link to="https://play.google.com/store/games?device=windows&pli=1">MobileApp</Link>
      </li>
      <li  onClick={()=>{setMenu("contact")}} className={menu==="contact"?"active":""}>ContactUs</li>
    </ul>
    <div className="navRight">
      <img src={assets.search_icon}></img>
      <div className="navSrch">
        <Link to="/cart"><img src={assets.basket_icon}></img></Link>
        
        <div className="dot"></div>
      </div>
      <button>SignIn</button>
    </div>
    </div>
    </>
  )
}

export default Nav