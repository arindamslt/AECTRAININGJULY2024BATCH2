import React from 'react'
import "./Nav.css"
function Nav() {
  return (
    <div className='navMainContainer'>
        
      <div className='navLContainer'>
         <h2>MYAPP</h2>
      </div>
      <div className='navRContainer'>
       <a href="/state">STATE</a>
       <a href="/profile">PROFILE</a>
       <a href="/props">PROPS</a>
       <a href="/propsdrilling">PROPSDRILLING</a>
       <a href="/context">CONTEXT</a>
       <a href="/condrend">CRENDERING</a>
       <a href="/user">USER</a>
       <a href="/userinfo">USERINFO</a>
       <a href="/product">PRODUCT</a>
       <a href="/orderreport">ORDER REPORT</a>
       <a href="/addorder">ADD ORDER</a>
      </div>
    </div>
  )
}

export default Nav
