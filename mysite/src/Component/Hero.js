import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './Hero.css'

export const Hero = () => {
  return (
    <div className='hero-container'>
    
    <h1>ADVENTURE AWAITS</h1>
    <p>What are u waitin!!</p>
<div className="hero-btns">
<Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large"><Link to="/signup" className='LINKER'>GET STARTED</Link></Button>
<Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large"><Link to={{ pathname: "https://youtu.be/y6E1L6KVwYw" }} target="https://youtu.be/y6E1L6KVwYw" >WATCH TRAILER</Link></Button>
</div>

    </div>
  )
}
