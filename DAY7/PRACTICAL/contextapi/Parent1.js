import React from 'react'
import { useState } from 'react'
import Child1 from './Child1';
import mycontext from './context';
function Parent1() {
    let[state,setState]=useState("");
    const populateData=(event)=>{
     setState(event.target.value);
    }
  return (
    <div>
      <h2>PARENT1 COMPONENT</h2>
      <input type="text" placeholder='ENTER YOUR NAME' onChange={populateData}/>
      <mycontext.Provider value={state}>
      <Child1/>
      </mycontext.Provider>
    </div>
  )
}

export default Parent1
