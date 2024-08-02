import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function AddFood() {
  let[food,setFood]=useState({
    fid:"",
    fname:"",
    price:""
})
let[msg,setMsg]=useState("");
const refreshData=()=>{
  setFood({
    fid:"",
    fname:"",
    price:""
  })
setMsg("");
}
const addData=()=>{
  axios.post("http://localhost:1004/food/add",food)
  .then((res)=>{
      console.log(res.data);
      setFood(res.data);
      setMsg(res.data);
  })
  .catch((error)=>{
      console.log(error);
      alert("SOME THING WRONG ON ADDING DATA");
   })
}
  return (
    <div style={{marginLeft:"150px"}}>
      <h2>ADDING FOOD</h2>
      <input type="text" className='form-control' value={food.fid}
      onChange={(event)=>{
         setFood({
          ...food,
          fid:event.target.value        
         })
      }}placeholder='ENTER THE FOOD ID'/>
      <input type="text" className='form-control' value={food.fname}
      onChange={(event)=>{
         setFood({
          ...food,
          fname:event.target.value        
         })
      }}placeholder='ENTER THE FOOD NAME'/>
       <input type="text" className='form-control' value={food.price}
      onChange={(event)=>{
         setFood({
          ...food,
          price:event.target.value        
         })
      }}placeholder='ENTER THE FOOD PRICE'/>
         <button className='btn btn-outline-primary' style={{marginTop:"10px"}} onClick={addData}>ADD</button>&nbsp;&nbsp;
       <button className='btn btn-outline-dark' style={{marginTop:"10px"}} onClick={refreshData}>REFRESH</button>
        <h3>{msg}</h3>
    </div>
  )
}

export default AddFood
