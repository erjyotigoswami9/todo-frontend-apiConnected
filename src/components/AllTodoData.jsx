import React, { useContext, useEffect, useState } from 'react'
import { TodosNavbar } from './navbar/TodosNavbar'
import '../App.css'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { url } from '../url'

export const AllTodoData = () => {
  let {isLogin,setIsLogin,isRegistered,setIsRegistered,token,setToken,msg,setMsg} = useContext(AuthContext) ;
  let [todoListData,setTododListData] = useState([]) ;
  let [editId, setEditId] = useState("") ;
  let [editStatusChange, setEditStatusChange] = useState("") ;
  let [show,setShow] = useState(false) ;
  let navigate = useNavigate() ;

  async function getData(){

    let url2 =`${url}/todo/data` ;
    let instance = axios.create({
      headers : {
        Authorization : `Bearer ${token}` 
      }
    })
    
    let res = await instance.get(url2) ;
    console.log(res) ;
    // if(res.response.request.status!=200) {
    //   navigate("/login") ;
    //   alert("login first to see that list") ;
      
    // }
    if(res.request.status==200){
      setTododListData(res.data) ;
      console.log(res.data) ;
    }else{
      if(res.response.request.status!=200)
      alert("login pls")
    }
    }

  useEffect(()=>{
    try {
      if(isLogin==true)
      getData() ;
    else alert("login pls") ;
    } catch (error) {
      alert("login pls") ;
    }
    
  },[])

  async function handleEditStatus(statusEdit,id){
    if(statusEdit!=""){
      if(statusEdit=="pending" || statusEdit=="completed"){
        let instance = axios.create({
          headers : {
            Authorization : `bearer ${token}`
          }
        })
        let url2 = `${url}/todo/update/${id}`
        let res = await instance.patch(url2,{"status":statusEdit}) ;
        console.log(res) ;
        if(res.request.status==200){
          setEditId("") ;
          setEditStatusChange("") ;
          if(res.data.msg=="userId not matched with todo creator id"){
               setShow(true) ;
               alert("userId not matched with todo creator id") ;
          }else if(res.data.msg=="you are not writer"){
                alert("you are not writer") ;
          }else
          navigate("/todopage")
        }
      }
    }
  }

  function handleEdit(id){}

  async function handleDelete(id){
    let instance = axios.create({
      headers : {
        Authorization : `bearer ${token}`
      }
    })
    let url2 = `${url}/todo/delete/${id}`
    let res = await instance.delete(url2) ;
    console.log(res) ;
    if(res.request.status==200){
      setEditId("") ;
      setEditStatusChange("") ;
      if(res.data.msg=="user not matched with the todo creator id"){
           setShow(true) ;
           alert("user not matched with the todo creator id") ;
      }else if(res.data.msg=="you are not writer"){
        alert("you are not writer") ;
  }else
      navigate("/todopage")
    }
  }

  return (
    <div>
      <TodosNavbar/>
      <br />
      <>
      <div className="createTodo">
        <h1>Todo's List</h1>
        <div className="todosListDiv1">
           <div>
            {todoListData&& todoListData?.map(ele=>{
              return (
                
               <div key={`${Date.now()}/${ele.title}/${ele.userId}}/${ele._id}`}>
               <div className="editDeleteTodo">
                   <button onClick={()=>{handleEdit(ele._id); setEditId(ele._id)}}>✏️</button>
                   <button onClick={()=>{handleDelete(ele._id); setEditId(ele._id)}}>❌</button>
               </div>
               <h3>TITLE : {ele.title}</h3>
               <h3>DESCRIPTION </h3>
                   <p>{ele.description}</p>
               <h3>STATUS </h3>
                   <p>{ele.status}</p>
              {editId==ele._id && 
              <div className="editStatusDiv">
                   <label>Edit Status</label>
               <select value={editStatusChange} onChange={(e)=>{setEditStatusChange(e.target.value); handleEditStatus(e.target.value, ele._id)}} >
                   <option value="">Select</option>
                   <option value="pending">Pending</option>
                   <option value="completed">Completed</option>
               </select>
               </div>
               }
               <h3>DUE DATE </h3>
                   <p>{ele.dueDate}</p>
               <h3>CREATOR'S USERNAME </h3>
                   <p>{ele.username}</p>
              </div>
              )
            })}
               
            </div>
        </div>
    </div>

      </>
    </div>
  )
}
