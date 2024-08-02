import React from 'react'
import "./Food.css";
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function Food() {
  return (
    <div className='pdMainContainer'>
      <div className='pdLConatiner'>
        <Link to="addfood">ADD FOOD</Link>
        <Link to="deletefood">DELETE FOOD</Link>
        <Link to="viewfood">VIEW FOOD</Link>
        <Link to="updatefood">UPDATE FOOD</Link>
        <Link to="searchfood">SEARCH FOOD</Link>
      </div>
      <div className='pdRContainer'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Food
