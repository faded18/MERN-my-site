import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './Navbar'
import axios from "axios"
import "./Signup.css"
// import "./Button.css"
// import './App.css'
export const Signup = () => {

const [user,setUser]=useState({
name:" ",
dob:" ",
email:" ",
password:""
,
})


const handleclick=(event)=>{

const{name,value}=event.target;
setUser({...user,
    [name]:value,
})}

const submit=()=>{

const {name,dob,email,password}=user;
console.log(user)
if(name && dob && email && password){
axios.post("http://localhost:9002/register",user)
  .then(res=> alert(res.data.message))
}else{
  alert("no")
}


}



  return (
<>
<Navbar/>
<div className='Full'>
<div class="center">
  <h1>Sign up</h1>
<div  className='form1'   >

      <div class="inputbox">
      <input type="text" name='name' autoComplete='off'   value={user.name} onChange={handleclick} />
      <span>Enter Your Name</span>
       </div>

       <div class="inputbox">
      <input type="text" name='dob'  autoComplete='off'  value={user.dob}  onChange={handleclick} />
      <span>Date of Birth</span>
       </div>

       <div class="inputbox">
      <input type="email" name='email' autoComplete='off'   value={user.email} onChange={handleclick}  />
      <span>Email</span>
       </div>
     <div class="inputbox">
      <input type="password" name='password' autoComplete='off'   onChange={handleclick} value={user.password} />
      <span>Enter your new Password</span>
    </div>
    <div class="inputbox">
     <button onClick={submit}>Submit</button>
    </div>

</div>
<div className='log'>
  <Link to='/login'><h3>Already have a account?</h3></Link>
</div>

</div>


</div>









</>




  )
}
