import React from 'react'
import "./Product.css";
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function Product() {
  return (
    <div className='pdMainContainer'>
      <div className='pdLConatiner'>
        <Link to="electronics">ELECTRONICS</Link>
        <Link to="jewellery">JEWELLERY</Link>
        <Link to="garments">GARMENTS</Link>
        <Link to="retails">RETAILSS</Link>
      </div>
      <div className='pdRContainer'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Product
