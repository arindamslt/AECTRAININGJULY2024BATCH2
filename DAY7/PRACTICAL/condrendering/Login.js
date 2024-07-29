import React from 'react'

function Login() {
  return (
    <div style={{width:"30%",margin:"50px auto"}}>
      <h2>LOGIN PAGE</h2>
      <input type="text" className='form-control' placeholder='ENTER THE USERNAME'/>
      <input type="password" className='form-control' placeholder='ENTER THE PASSWORD'/>
    
      <button className='btn btn-outline-success'
      style={{marginTop:"10px"}}>LOGIN</button>
    </div>
  )
}

export default Login
