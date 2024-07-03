import React, { useContext, useState } from 'react'
import '../App.css'
import {AuthContext} from '../context/AuthContext'
import axios from 'axios'
import { url } from '../url'

export const Register = () => {

  let {isLogin,setIsLogin,isRegistered,setIsRegistered} = useContext(AuthContext) ;
  let [formData, setFormData] = useState({username:"", email:"", password:"",role:""}) ;
  async function handleSubmit(e){
    e.preventDefault() ;
    let obj = {...formData} ;
    if(formData.username!="" && formData.email!="" && formData.password!="" && formData.role!=""){
      console.log(obj) ;
    
      let res = await axios.post(`${url}/user/register`,obj) ;
      console.log(res) ;
      setFormData({username:"", email:"", password:"", role:""}) ;
      if(res.request.status==200){
        setIsRegistered(true) ;
        
      }
    }
  }

  return (
   <>
   {isRegistered==false && 
   <div className="registerDiv">
        <h1>REGISTRATION FORM</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="enter username" value={formData.username} onChange={(e)=>setFormData({...formData, username:e.target.value})}  required /><br/>
            <input type="email" placeholder="enter email" value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})} required /><br/>
            <input type="password" placeholder="enter password" value={formData.password} onChange={(e)=>setFormData({...formData, password:e.target.value})} required /><br/><br/>
            <select value={formData.role} onChange={(e)=>setFormData({...formData, role:e.target.value})} style={{border:"1px solid skyblue", outline:"1px solid white", padding:"10px"}} required>
              <option value="">Select User Role</option>
              <option value="reader">Reader</option>
              <option value="writer">Writer</option>
            </select>
            <br /><br />
            <button className="submitRegistrationForm">Submit</button>
        </form>
    </div>
    } 
    {
      isRegistered==true && <h2 style={{textAlign:"center", marginTop:"250px"}}>You have registered successfully! login please</h2>
    }
   </>
  )
}
