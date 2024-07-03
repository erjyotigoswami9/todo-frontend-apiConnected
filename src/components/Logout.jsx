import React from 'react'
import '../App.css'
import {AuthContext} from '../context/AuthContext'
import axios from 'axios'
import { useContext } from 'react'

export const Logout = () => {
  let {isLogin,setIsLogin,isRegistered,setIsRegistered} = useContext(AuthContext) ;

  return (
    <>
    { isLogin==true &&
    <div className="registerDiv">
        <p className="logoutText">Are you sure, want to logout ?</p>
        
            <button className="logoutBtn" onClick={()=>setIsLogin(false)}>Logout</button>
 
    </div>
    }
    {
      isLogin==false && <h2 style={{textAlign:"center", marginTop:"250px"}}>You have logged out successfully! </h2>
    }
    </>
  )
}
