import React from 'react'
import "./Nav.css"
function Nav() {
  return (
    <div className='navMainContainer'>
        
      <div className='navLContainer'>
         <h2>FOOD APP</h2>
      </div>
      <div className='navRContainer'>
       <a href="/food">FOOD</a>
       <a href="/contact">CONTACT US</a>
       
      </div>
    </div>
  )
}

export default Nav
