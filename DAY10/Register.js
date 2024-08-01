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
let[errors,setErrors]=useState({
  uname:"",
    pass:"",
    nm:""
})
const validForm=()=>{
  var isValid=true;
  var newErrors=({
    uname:"",
    pass:"",
    nm:""
  })
  if(register.uname.trim().length<=4)
  {
    newErrors.uname="USERNAME MUST BE ATLEAST 5 CHARECTER";
    isValid=false;
  }
  if(register.pass.trim().length<=4)
    {
      newErrors.pass="PASSWORD MUST BE ATLEAST 5 CHARECTER";
      isValid=false;
    }
    if(register.nm.trim().length<=0)
      {
        newErrors.nm="NAME MUST BE GIVEN";
        isValid=false;
      }
      setErrors(newErrors);
  return isValid;
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
      <h3 style={{color:"red"}}>{errors.uname}</h3>
     <input type="password" className='form-control' value={register.pass}
      onChange={(event)=>{
         setRegister({
          ...register,
          pass:event.target.value        
         })
      }}placeholder='ENTER THE PASSWORD'/>
      <h3 style={{color:"red"}}>{errors.pass}</h3>
      <input type="text" className='form-control' value={register.nm}
      onChange={(event)=>{
         setRegister({
          ...register,
          nm:event.target.value        
         })
      }}placeholder='ENTER THE NAME'/>
      <h3 style={{color:"red"}}>{errors.nm}</h3>
      <button className='btn btn-outline-primary' style={{marginTop:"10px"}} 
      onClick={()=>{
        if(validForm()===true)
        {
          addData();
        }
      }}>REGISTER</button>&nbsp;&nbsp;
       <button className='btn btn-outline-dark' style={{marginTop:"10px"}} onClick={refreshData}>REFRESH</button>
        <h3>{msg}</h3>
    </div>
  )
}

export default Register
