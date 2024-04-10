
import React, { useState } from 'react';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { addTask, recComplete, recDel } from './ToDoSlice';

const App=()=>
{
  const ans=useSelector((state)=>state.todo.task);
  const disptach=useDispatch()
  const[input,setInput]=useState("");
  let sn=0;
  const workAdd=()=>{
    disptach(addTask(input))
  }
  const myDel=(id)=>
  {
    disptach(recDel(id))
  }
  const taskComplete=(id)=>{
    disptach(recComplete(id))
  }
  const myans=ans.map((key)=>{
    sn++;
    return(
      <tr>
        <td>[{sn}].</td>
        <td>
          {key.status ? <span>{key.work}</span>:<span style={{color:"red",textDecoration:"line-through"}}></span>
          }
          </td>
          <td>
            <button onClick={()=>{myDel(key.id)}}>Delete</button>
          </td>
          <td>
            <button onClick={()=>{taskComplete(key.id)}}>Complete</button>
          </td>
          <td>
            <button>ReOpen</button>
          </td>
      </tr>
    )
  });
  console.log(ans);
  return(
    <>
    <h1>TO DO LIST</h1>
    enter your task:<input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
    <button onClick={workAdd}>Add Task</button>
    <hr/>
    <table border="1">w
      <tr>
        <th>Sno</th>
        <th>Work Assinning</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      {myans}
    </table>
   
    

       
    </>
  );
}

export default App;