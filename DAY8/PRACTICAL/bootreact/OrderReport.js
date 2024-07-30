import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
function OrderReport() {
    let[user,setUser]=useState([]);
   
    /*const filterData=(event)=>{
      if(event.target.value==='male')
      {
        setUser(
            data.filter((element,index)=>{
                return element.gender==='male'
            })
        )
      }
      else if(event.target.value==='female')
      {
        setUser(
            data.filter((element,index)=>{
                return element.gender==='female'
            })
        )
      }
      else{
        setUser(data);
      }
    }*/
    useEffect(()=>{
        axios.get("http://localhost:1004/order/fetch")
        .then((res)=>{
           console.log(res.data);
           setUser(res.data);
           
        })
        .catch((error)=>{
           console.log(error);
           alert("SOME THING WRONG ON FETCHING DATA");
        })
    },[])
    /*const getData=()=>{
     axios.get("https://randomuser.me/api/?results=20")
     .then((res)=>{
        console.log(res.data.results);
        setUser(res.data.results);
        setData(res.data.results);
     })
     .catch((error)=>{
        console.log(error);
        alert("SOME THING WRONG ON FETCHING DATA");
     })
    }*/
  return (
    <div>
      <h2>ORDER DETAILS</h2>
     
      
      {
        user.length>0 ?
        <div>
        <table className='table table-hover table-striped'>
            <thead style={{backgroundColor:"black",color:"white"}}>
                <tr>
                <td>ORDER ID</td>
                <td>QUANTITY</td>
                <td>PRICE</td>
                
                </tr>
            </thead>
            <tbody>
                
                {
                    user.map((element,index)=>{
                        return(
                            <tr>
                            <td>{element.oid}</td>
                            <td>{element.oqty}</td>
                            <td>{element.price}</td>
                           
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
        :<h2 style={{color:"red"}}>NO USER INFORMATION</h2>
      }
    </div>
  )
}

export default OrderReport
