import React, {Component} from "react";
import {useState} from "react";
import axios from "axios";

function CreateTodo(){
  const [todoDescription,setTodoDescriptionState] = useState("");
  const [todoResponsible,setTodoResponsibleState] = useState("");
  const [todoPriority,setTodoPriorityState] = useState("");
  const [todoCompleted,setTodoCompletedState] = useState(false);
  const onChangeTodoDescription = (i)=>{
    setTodoDescriptionState(i);
  };
  const onChangeTodoResponsible = (i)=>{
    setTodoResponsibleState(i);
  };
  const onChangeTodoPriority = (i)=>{
    setTodoPriorityState(i);
  };
  const onChangeTodoCompleted = (i)=>{
    setTodoCompletedState(i);
  };
  const handleSubmit = (e)=>{
    e.preventDefault();

    console.log(`Form Submitted :`);
    console.log(`To Do Description : ${todoDescription}`);
    console.log(`To Do Responsible : ${todoResponsible}`);
    console.log(`To Do Priority : ${todoPriority}`);
    console.log(`To Do Completed : ${todoCompleted}`);

    const newTodo ={
      todo_description : todoDescription,
      todo_responsible : todoResponsible,
      todo_priority: todoPriority,
      todo_completed : todoCompleted
    };

    axios.post("http://localhost:4000/todos/add",newTodo)
        .then(res=>console.log(res.data));

    setTodoDescriptionState("");
    setTodoResponsibleState("");
    setTodoPriorityState("");
    setTodoCompletedState(false);
  };
  return(
    <div style={{marginTop : 10}}>
      <h3>Create New Todo</h3>
      <form onSubmit = {(e)=>handleSubmit(e)}>
        <div className= "form-group">
          <label>Description : </label>
          <input  type="text"
                  className="form-control"
                  value={todoDescription}
                  onChange = {e=>onChangeTodoDescription(e.target.value)}/>
        </div>

        <div className = "form-group">
          <label>Responsible : </label>
          <input  type="text"
                  className="form-control"
                  value={todoResponsible}
                  onChange={e=>onChangeTodoResponsible(e.target.value)}/>
        </div>
        <div className = "form-group">
          <div className="form-check form-check-inline">
            <input  className ="form-check-input"
                    type="radio"
                    name="priorityOptions"
                    id="priorityLow"
                    value="Low"
                    //checked={()=>setTodoPriorityState("Low")}
                    onChange={e=>onChangeTodoPriority(e.target.value)}
                    />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input  className="form-check-input"
                    type="radio"
                    name="priorityOptions"
                    id="priorityMedium"
                    value="Medium"
                    //checked={()=>setTodoPriorityState("Medium")}
                    onChange={e=>onChangeTodoPriority(e.target.value)}
                    />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input  className="form-check-input"
                    type="radio"
                    name="priorityOptions"
                    id="priorityHigh"
                    value="High"
                    //checked={()=>setTodoPriorityState("High")}
                    onChange={e=>onChangeTodoPriority(e.target.value)}
                    />
            <label className="form-check-label">High</label>
          </div>
        </div>
        <div className="form-group">
          <input  type="submit"
                  value="Update Todo"
                  className="btn btn-primary"/>
        </div>

      </form>
    </div>
  );
}

export default CreateTodo;
