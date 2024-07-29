import React from 'react'

function Register({setState}) {
    const addData=()=>{
     setState(false);
    }
  return (
    <div style={{width:"30%",margin:"50px auto"}}>
        <h2>REGISTRATION PROCESS GOING ON</h2>
      <input type="text" className='form-control' placeholder='ENTER THE USERNAME'/>
      <input type="password" className='form-control' placeholder='ENTER THE PASSWORD'/>
      <input type="text" className='form-control' placeholder='ENTER THE NAME'/>
      <button className='btn btn-outline-primary'
      style={{marginTop:"10px"}} onClick={addData}>REGISTER</button>
    </div>
  )
}

export default Register
