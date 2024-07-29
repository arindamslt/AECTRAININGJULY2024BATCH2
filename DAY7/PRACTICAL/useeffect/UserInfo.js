import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
function UserInfo() {
    let[user,setUser]=useState([]);
    let[data,setData]=useState([]);
    const filterData=(event)=>{
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
    }
    useEffect(()=>{
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
      <h2>USER INFORMATION</h2>
     
      {
                    user.length>0 &&(
                       <div>
                        <input type="radio" name="gender" value="all" defaultChecked onChange={filterData}/>ALL
                        <input type="radio" name="gender" value="male" onChange={filterData} />MALE
                        <input type="radio" name="gender" value="female" onChange={filterData} />FEMALE
                       </div>
                    )
                }
      {
        user.length>0 ?
        <div>
        <table cellPadding={10} style={{margin:"10px auto"}}>
            <thead style={{backgroundColor:"black",color:"white"}}>
                <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>IMAGE</td>
                <td>GENDER</td>
                <td>EMAIL</td>
                <td>CITY</td>
                </tr>
            </thead>
            <tbody>
                
                {
                    user.map((element,index)=>{
                        return(
                            <tr>
                            <td>{index+1}</td>
                            <td>{element.name.first}</td>
                            <td><img src={element.picture.medium} height={80} width={80}/></td>
                            <td>{element.gender}</td>
                            <td>{element.email}</td>
                            <td>{element.location.city}</td>
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

export default UserInfo
