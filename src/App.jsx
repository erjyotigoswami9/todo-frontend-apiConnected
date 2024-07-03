import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import {Register} from './components/Register'
import { Login } from './components/Login'
import { Home } from './components/Home'
import {Logout} from './components/Logout' 
import {CreateTodo} from './components/CreateTodo'
import {AllData} from './components/AllData'
import {AllTodoData} from './components/AllTodoData'
import { TodoPage } from './components/TodoPage'
import { Navbar } from './components/navbar/Navbar'



function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/alldata' element={<AllData/>} />
        <Route path='/alltododata' element={<AllTodoData/>} />
        <Route path='/createtodo' element={<CreateTodo/>} />
        <Route path='/todopage' element={<TodoPage/>} />
      </Routes>
    </>
  )
}

export default App
