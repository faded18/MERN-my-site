import { useState,useEffect } from "react"
import React from 'react'
import {Link} from 'react-router-dom';
import Button from "./Button";
import './Navbar.css'

function Navbar() {
const [click,setClick] = useState(false)
const[button,setbutton]=useState(true)
const handleClick =()=>{
setClick(!click)
}
const closemenu =()=>{
    setClick(false);


}
const showButton =()=>{
    if(window.innerWidth<=960){
        setbutton(false)
    }else{setbutton(true)}
}
useEffect(() => {
  showButton();
}, [])

window.addEventListener('resize',showButton)
  return (
    <>
    <nav>
    <div className="navbar">
        <div className="navbar-container">
            <Link to='/' className="navbar-logo">TRAVEL <i class="fa-solid fa-book-atlas"></i></Link>



        </div>
        <div className="menu-icon" onClick={handleClick}>
            <i  className={click ? 'fas fa-times':'fas fa-bars'} />

        </div>
        <ul className={click? 'nav-menu-active':'nav-menu'}>
          <li className="nav-item">
              <Link to='/' className="nav-links" onClick={closemenu}>Home</Link>
          </li>
          <li className="nav-item">
              <Link to='/tickets' className="nav-links" onClick={closemenu}>Tickets</Link>
          </li>
          <li className="nav-item">
              <Link to='/login' className="nav-links" onClick={closemenu}>Login</Link>
          </li>
          <li className="nav-item">
              <Link to='/case' className="nav-links" onClick={closemenu}>Help</Link>
          </li>




          {/* <li className="nav-item">
              <Link to='/signup' className="nav-links-mobile" onClick={closemenu}>SignUp</Link>
          </li> */}
         


        </ul>
       {/* {button && <Button buttonStyle="btn--outline">Signup</Button>} */}
    </div>

    </nav>
    
    </>
  )
}

export default Navbar