import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
function FoodReport() {
    let[food,setFood]=useState([]);
   
    
    useEffect(()=>{
        axios.get("http://localhost:1004/food/fetch")
        .then((res)=>{
           console.log(res.data);
           setFood(res.data);
           
        })
        .catch((error)=>{
           console.log(error);
           alert("SOME THING WRONG ON FETCHING DATA");
        })
    },[])
    
  return (
    <div style={{marginLeft:"150px"}}>
      <h2>FOOD DETAILS</h2>
     
      
      {
        food.length>0 ?
        <div>
        <table className='table table-hover table-striped'>
            <thead >
                <tr>
                <td>FOOD ID</td>
                <td>FOOD NAME</td>
                <td>PRICE</td>
                
                </tr>
            </thead>
            <tbody>
                
                {
                    food.map((element,index)=>{
                        return(
                            <tr>
                            <td>{element.fid}</td>
                            <td>{element.fname}</td>
                            <td>{element.price}</td>
                           
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
        :<h2 style={{color:"red"}}>NO FOOD INFORMATION</h2>
      }
    </div>
  )
}

export default FoodReport
