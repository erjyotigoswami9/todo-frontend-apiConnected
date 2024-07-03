import React, { useContext } from 'react'
import '../../App.css'
import { NavLink } from 'react-router-dom'
import { Home } from '../Home'
import { Login } from '../Login'
import { Register } from '../Register'
import { Logout } from '../Logout'
import { TodosNavbar } from './TodosNavbar'
import {AuthContext} from '../../context/AuthContext'

export const Navbar = () => {
  let {isLogin,setIsLogin,isRegistered,setIsRegistered} = useContext(AuthContext) ;
  return (
    <div className="navbarDiv1">
        <div>
            <img width="80" height="50" src="data:image/png;base64,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" alt="todos"/>
        </div>
        <div>
        <NavLink to='/' style={({isActive})=>isActive?{color:"red", textDecoration:"none"}:{color:"black", textDecoration:"none"}}>Home</NavLink>
        {isLogin==false && 
        <NavLink to='/login' style={({isActive})=>isActive?{color:"red", textDecoration:"none"}:{color:"black", textDecoration:"none"}}>Login</NavLink>
        }
        {isLogin==false && isRegistered==false && 
        <NavLink to='/register' style={({isActive})=>isActive?{color:"red", textDecoration:"none"}:{color:"black", textDecoration:"none"}}>Register</NavLink>
        }
        {isLogin==true &&
        <NavLink to='/logout' style={({isActive})=>isActive?{color:"red", textDecoration:"none"}:{color:"black", textDecoration:"none"}}>Logout</NavLink>
        }
        <NavLink to='/todopage' style={({isActive})=>isActive?{color:"red", textDecoration:"none"}:{color:"black", textDecoration:"none"}}>Todos</NavLink>
    </div>
    </div>
  )
}
