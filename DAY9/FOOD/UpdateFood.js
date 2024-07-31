import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function UpdateFood() {
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
let[msg,setMsg]=useState("");
const refreshData=()=>{
  setFood({
    fid:"",
    fname:"",
    price:""
  })
//setMsg("");
}
const updateData=(fid)=>{
  alert(fid);
  axios.put(`http://localhost:1004/food/upd/${fid}`,food)
  .then((res)=>{
      console.log(res.data);
      setData(res.data);
     // setFood(res.data);
      //setMsg(res.data);
  })
  .catch((error)=>{
      console.log(error);
      alert("SOME THING WRONG ON UPDATING  DATA");
   })
}
  return (
    <div style={{marginLeft:"150px"}}>
      <h2>UPDATE FOOD</h2>
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
         <button className='btn btn-outline-primary' style={{marginTop:"10px"}} 
         onClick={(fid)=>{
          updateData(food.fid);
         }}>UPDATE</button>&nbsp;&nbsp;
       <button className='btn btn-outline-dark' style={{marginTop:"10px"}} onClick={refreshData}>REFRESH</button>
       
        <h2>{data.fid}{data.fname}{data.price}</h2>
    </div>
  )
}

export default UpdateFood
