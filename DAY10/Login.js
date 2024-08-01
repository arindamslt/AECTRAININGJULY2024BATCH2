import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
  let[register,setRegister]=useState({
    uname:"",
    pass:""
  
})
let[msg,setMsg]=useState("");
var navigate=useNavigate();
const getData=(uname,pass)=>{
  axios.get(`http://localhost:1004/register/login/${uname}/${pass}`)
  .then((res)=>{
      console.log(res.data);
      //setRegister(res.data);
      if(res.data==="LOGIN SUCCESSFULL")
      {
        navigate("/nav");
      }
      setMsg(res.data);
  })
  .catch((error)=>{
      console.log(error);
      alert("SOME THING WRONG ON ADDING DATA");
   })
}
  return (
    <div style={{width:"30%",margin:"50px auto"}}>
      <h2>LOGIN PAGE</h2>
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
      <button className='btn btn-outline-primary'
      onClick={(uname,pass)=>{
        getData(register.uname,register.pass)
      }}>LOGIN</button> &nbsp;&nbsp;
      <button className='btn btn-outline-primary'>REFRESH</button> &nbsp;&nbsp;
      <button className='btn btn-outline-dark'
      onClick={()=>{
        navigate("/");
      }}>HOME</button>
      <h2>{msg}</h2>
    </div>
  )
}

export default Login
