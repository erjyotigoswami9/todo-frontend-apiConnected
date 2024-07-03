import React, { useContext, useEffect, useState } from 'react'
import '../App.css'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { url } from '../url'
import axios from 'axios'

export const AllData = () => {
  let [todoListData,setTododListData] = useState([]) ;
  let {isLogin,setIsLogin,isRegistered,setIsRegistered,token,setToken,msg,setMsg} = useContext(AuthContext) ;
 

  async function getData(){

    let url2 =`${url}/user/writer` ;
    let instance = axios.create({
      headers : {
        Authorization : `Bearer ${token}` 
      }
    })
    
    let res = await instance.get(url2) ;
    console.log(res) ;

    if(res.request.status==200){
      setTododListData(res.data) ;
      console.log(res.data) ;
    }
    }

  useEffect(()=>{
    
      if(isLogin==true)
      getData() ;
   
    
    
  },[])


  return (
    <>
    <div className="createTodo">
      <br /><br /><br />
        <h1>COLLECTION OF USER'S</h1>
        <div className="todosListDiv1">
           <div>
           {todoListData&& todoListData?.map(ele=>{
            return(
               <div key={ele._id}>
                
                <h3>USERNAME </h3>
                   <p>{ele.username}</p>
                <h3>EMAIL </h3>
                    <p>{ele.email}</p>
                <h3>ROLE </h3>
                    <p>{ele.role}</p>
                <h3>ID </h3>
                    <p>{ele._id}</p>
               </div>
            )
                 })}
            </div>
        </div>
    </div>

    </>
  )
}
