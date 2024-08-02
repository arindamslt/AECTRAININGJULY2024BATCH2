import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function SearchFood() {
  let[food,setFood]=useState({
    fid:"",
    fname:"",
    price:""
})
let[data,setData]=useState({
  fid:"",
  fname:"",
  price:""
})
const searchData=(fid)=>{
  alert(fid);
  axios.get(`http://localhost:1004/food/fetch/${fid}`)
  .then((res)=>{
      console.log(res.data);
      //setFood(res.data);
     setData(res.data);
  })
  .catch((error)=>{
      console.log(error);
      alert("SOME THING WRONG ON ADDING DATA");
   })
}
  return (
    <div>
      <h2>SEACH FOOD BY FOOD ID</h2>
      <input type="text" className='form-control' value={food.fid}
      onChange={(event)=>{
         setFood({
          ...food,
          fid:event.target.value        
         })
      }}placeholder='ENTER THE FOOD ID'/>
       <button className='btn btn-outline-primary' style={{marginTop:"10px"}} 
       onClick={(fid)=>{
         searchData(food.fid);
       }}>SEARCH</button>&nbsp;&nbsp;
       <table className='table table-hover'>
        <thead>
          <tr>
            <td>FOOD ID</td>
            <td>FOOD NAME</td>
            <td>PRICE</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.fid}</td>
            <td>{data.fname}</td>
            <td>{data.price}</td>
          </tr>
        </tbody>
       </table>
    </div>
  )
}

export default SearchFood
