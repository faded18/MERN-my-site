import React from 'react'
import './Signup.css'
import Navbar from './Navbar'
export const Help = () => {
  return (
    <>
    <Navbar/>
    <div className='Full'>
    <div class="centeri">
      <h1>Query</h1>
    <div  className='form1'   >
    
    <div class="inputbox">
          <input type="text" autoComplete='off'  required="required"/>
          <span>Email</span>
        </div>
        <div class="inputbox">
          <textarea name=""  placeholder='Enter your query' id="" cols="30" rows="10"></textarea>
        </div>
        <div class="inputbx">
          <input type="button"   value="submit"/>
        </div>
    
    </div>
    
    </div>
    
    
    </div></>
  )
}


