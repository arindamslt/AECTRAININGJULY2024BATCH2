import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function Register() {
  let[register,setRegister]=useState({
    uname:"",
    pass:"",
    nm:""
})
let[msg,setMsg]=useState("");
const refreshData=()=>{
  setRegister({
    uname:"",
    pass:"",
    nm:""
  })
setMsg("");
}
const addData=()=>{
  axios.post("http://localhost:1004/register/add",register)
  .then((res)=>{
      console.log(res.data);
      setRegister(res.data);
      setMsg(res.data);
  })
  .catch((error)=>{
      console.log(error);
      alert("SOME THING WRONG ON ADDING DATA");
   })
}
  return (
    <div style={{width:"30%",margin:"50px auto"}}>
      <h2>SIGN UP</h2>
      <marquee>DISCOUNT OFFER</marquee>
      <input type="text" className='form-control' value={register.uname}
      onChange={(event)=>{
         setRegister({
          ...register,
          uname:event.target.value        
         })
      }}placeholder='ENTER THE USERNAME'/>
     <input type="password" className='form-control' value={register.pass}
      onChange={(event)=>{
         setRegister({
          ...register,
          pass:event.target.value        
         })
      }}placeholder='ENTER THE PASSWORD'/>
      <input type="text" className='form-control' value={register.nm}
      onChange={(event)=>{
         setRegister({
          ...register,
          nm:event.target.value        
         })
      }}placeholder='ENTER THE NAME'/>
      <button className='btn btn-outline-primary' style={{marginTop:"10px"}} onClick={addData}>REGISTER</button>&nbsp;&nbsp;
       <button className='btn btn-outline-dark' style={{marginTop:"10px"}} onClick={refreshData}>REFRESH</button>
        <h3>{msg}</h3>
    </div>
  )
}

export default Register
