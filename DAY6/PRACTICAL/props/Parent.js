import React from 'react'
import Child from './Child'
import { useState } from 'react'
function Parent() {
    let[state,setState]=useState("");
    const populateData=(event)=>{
       setState(event.target.value); 
    }
  return (
    <div>
      <h2>PARENT COMPONENT</h2>
      <input type="text" placeholder='ENTER YOUR NAME' onChange={populateData}/>
      <Child data={state}/>
    </div>
  )
}

export default Parent
