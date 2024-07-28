import React from 'react'

function Employee() {
  
  return (
    <div style={{width:"30%",margin:"50px auto"}}>
      <input type="text" className='form-control' placeholder='ENTER YOUR NAME'/>
      <input type="text" className='form-control' placeholder='ENTER YOUR EMAIL'/>
      <input type="text" className='form-control' placeholder='ENTER YOUR PHONE NUMBER'/>
      <button className='btn btn-outline-primary'>REGISTER</button>
    </div>
  )
}

export default Employee
