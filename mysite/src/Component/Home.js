import React from 'react'
import { Hero } from './Hero'
import '../App.css'
import { Cards } from './Cards'
import { Footer } from './Footer'
import Navbar from './Navbar'

export const Home =() => {
  return (
    <div>
    <div className='plo'>
<Navbar/>
</div>
<Hero/>
<Cards/>
<Footer/>
   </div>
  )
}
