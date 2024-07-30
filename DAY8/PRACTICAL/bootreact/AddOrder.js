import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function AddOrder() {
    let[order,setOrder]=useState({
        oid:"",
        oqty:"",
        price:""
    })
    let[msg,setMsg]=useState("");
    const refreshData=()=>{
           setOrder({
            oid:"",
            oqty:"",
             price:""
           })
        setMsg("");
    }
    const addData=()=>{
        axios.post("http://localhost:1004/order/add",order)
        .then((res)=>{
            console.log(res.data);
            setOrder(res.data);
            setMsg(res.data);
        })
        .catch((error)=>{
            console.log(error);
            alert("SOME THING WRONG ON ADDING DATA");
         })
    }
  return (
    <div style={{width:"30%",margin:"50px auto"}}>
      <h2>ADDING ORDER </h2>
      <input type="text" className='form-control' value={order.oid}
      onChange={(event)=>{
         setOrder({
          ...order,
          oid:event.target.value        
         })
      }}placeholder='ENTER THE ORDER ID'/>
      <input type="text" className='form-control' value={order.oqty}
      onChange={(event)=>{
         setOrder({
          ...order,
          oqty:event.target.value        
         })
      }}placeholder='ENTER THE ORDER QUANTITY'/>
      <input type="text" className='form-control' value={order.price}
      onChange={(event)=>{
         setOrder({
          ...order,
          price:event.target.value        
         })
      }}placeholder='ENTER THE ORDER PRICE'/>
       <button className='btn btn-outline-primary' style={{marginTop:"10px"}} onClick={addData}>ADD</button>&nbsp;&nbsp;
       <button className='btn btn-outline-dark' style={{marginTop:"10px"}} onClick={refreshData}>REFRESH</button>
        <h3>{msg}</h3>
    </div>
  )
}

export default AddOrder
