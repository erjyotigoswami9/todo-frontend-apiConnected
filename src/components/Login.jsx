import React, { useContext, useState } from 'react'
import '../App.css'
import {AuthContext} from '../context/AuthContext'
import axios from 'axios'
import cors from 'cors'
import { url } from '../url'

export const Login = () => {
  
  let {isLogin,setIsLogin,isRegistered,setIsRegistered,token,setToken} = useContext(AuthContext) ;
  let [formData, setFormData] = useState({email:"", password:""}) ;
  async function handleSubmit(e){
    e.preventDefault() ;
    let obj = {...formData} ;
    if(formData.email!="" && formData.password!=""){
      console.log(obj) ;
      let res = await axios.post(`${url}/user/login`,obj) ;
      console.log(res) ;
      setFormData({username:"", email:"", password:"", role:""}) ;
      if(res.request.status==200){
        setIsLogin(true) ;
        setToken(res.data.token) ;
        console.log(res.data.token) ;
      }
      setFormData({email:"", password:""}) ;
    }
  }
  return (
    <>
    {isLogin==false && 
    <div className="registerDiv">
        <h1>LOGIN FORM</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="enter email" value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})} required /><br/>
            <input type="password" placeholder="enter password" value={formData.password} onChange={(e)=>setFormData({...formData, password:e.target.value})} required /><br/><br/>
            <button className="submitRegistrationForm">Submit</button>
        </form>
    </div>
    }
    {
      isLogin==true && <h2 style={{textAlign:"center", marginTop:"250px"}}>You have login successfully! </h2>
    }
    </>
  )
}
