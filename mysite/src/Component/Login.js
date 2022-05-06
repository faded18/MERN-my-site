import React from 'react'
import { useState } from 'react'
import axios from "axios"
import Navbar from './Navbar'
import './Signup.css'
const Login = () => {


    const [user,setUser]=useState({
        password:"",
        email:" "
        ,
        })
        
        
        const handleclick=(event)=>{
        
        const{name,value}=event.target;
        setUser({...user,
            [name]:value,
        })
        
        
        
        }

const submit=()=>{
const{email,password}=user;

axios.post("http://localhost:9002/login",user)
.then(res=> alert(res.data.message))

}



  return (
    <>
<Navbar/>
<div className='Full'>
<div class="centeri">
  <h1>LOG IN</h1>
<div  className='form1'   >

<div class="inputbox">
      <input type="email" autoComplete='off'  onChange={handleclick}  name='email' value={user.email} required="required"/>
      <span>Email</span>
    </div>
    <div class="inputbox">
      <input type="password" name='password' onChange={handleclick} value={user.password} required="required"/>
      <span>Password</span>
    </div>
    <div class="inputbox">
      <input type="button" onClick={submit}  value="submit"/>
    </div>

</div>

</div>


</div>









</>
  )
}

export default Login