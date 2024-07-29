import React from 'react'
import Register from './Register'
import Login from './Login'
import { useState } from 'react'
function Main() {
    let[state,setState]=useState(true);
  return (
    <div>
     {
        state?<Register setState={setState}/>:<Login/>
     }
    </div>
  )
}

export default Main
