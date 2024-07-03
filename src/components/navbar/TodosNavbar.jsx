import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../App.css'

export const TodosNavbar = () => {
  return (
    <>
    
    <ul className="todoNavbarDiv1">
        <li><NavLink to='/createtodo' style={({isActive})=>isActive?{color:"red",textDecoration:"none"}:{color:"black",textDecoration:"none"}}>CREATE TODO</NavLink></li>
        <li><NavLink to='/alltododata' style={({isActive})=>isActive?{color:"red",textDecoration:"none"}:{color:"black",textDecoration:"none"}}>TODO LIST</NavLink></li>
        <li><NavLink to='/alldata' style={({isActive})=>isActive?{color:"red",textDecoration:"none"}:{color:"black",textDecoration:"none"}}>USER LIST</NavLink></li>
    
    </ul>
    </>
    
  )
}
