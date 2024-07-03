import React, { useContext, useState } from 'react'
import { TodosNavbar } from './navbar/TodosNavbar'
import '../App.css'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import { url } from '../url'

export const CreateTodo = () => {
  
  let {isLogin,setIsLogin,isRegistered,setIsRegistered,token,setToken} = useContext(AuthContext) ;
  let [todoData, setTodoData] = useState({title:"", description:"",status:"",dueDate:""}) ;

  async function handleSubmit(e){
    e.preventDefault() ;
    let obj = {...todoData} ;
    if(todoData.title!="" && todoData.description!="" && todoData.status!="" && todoData.dueDate!="") {
      console.log(obj) ;
      let instance = axios.create({
        headers : {
          Authorization : `Bearer ${token}`
        }
      })  ;
      let res = await instance.post(`${url}/todo/create`,obj) ;
      console.log(res) ;
      setTodoData({title:"", description:"",status:"",dueDate:""}) ;
    }
  }

  return (
    <div>
      <TodosNavbar/>
      
      <>
      
    <div className="createTodoDiv1">
        <h1>Create Todo</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="enter todo title" value={todoData.title} onChange={(e)=>setTodoData({...todoData, title:e.target.value})} required /> <br/><br/>
            <input type="text" placeholder="enter todo description" value={todoData.description} onChange={(e)=>setTodoData({...todoData, description:e.target.value})} required /> <br/> <br/>
            <label>Select Todo's Status</label><br/>
            <select value={todoData.status} onChange={(e)=>setTodoData({...todoData, status:e.target.value})}>
                <option value="">Status</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
            </select>
            <br/><br/>
            <label>Due Date</label><br/>
            <input type="date" value={todoData.dueDate} onChange={(e)=>setTodoData({...todoData, dueDate:e.target.value})} required /> <br/><br/>
            <button className="addTodoBtn">ADD</button>
        </form>
    </div>
<br />
      </>
      </div>
  )
}
