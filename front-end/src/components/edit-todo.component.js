import React, {Component} from "react";
import {useState,useEffect} from "react";
import axios from "axios";

export default EditTodo;


function EditTodo(props){
  const [todoDescription,setTodoDescriptionState] = useState("");
  const [todoResponsible,setTodoResponsibleState] = useState("");
  const [todoPriority,setTodoPriorityState] = useState("");
  const [todoCompleted,setTodoCompletedState] = useState(false);
  useEffect(()=>{
    axios.get('http://localhost:4000/todos/'+ props.match.params.id)
            .then(response => {
                this.setState({
                    todo_description: response.data.todo_description,
                    todo_responsible: response.data.todo_responsible,
                    todo_priority: response.data.todo_priority,
                    todo_completed: response.data.todo_completed
                })
            })
            .catch(function (error) {
                console.log(error);
            })
  });
  const handleSubmit = (e)=>{
    e.preventDefault();

    console.log(`Form Updated :`);
    console.log(`To Do Description : ${todoDescription}`);
    console.log(`To Do Responsible : ${todoResponsible}`);
    console.log(`To Do Priority : ${todoPriority}`);
    console.log(`To Do Completed : ${todoCompleted}`);

    const updatedTodo ={
      todo_description : todoDescription,
      todo_responsible : todoResponsible,
      todo_priority: todoPriority,
      todo_completed : todoCompleted
    }};
  return(
    <div style={{marginTop : 10}}>
      <h3>Create New Todo</h3>
      <form onSubmit = {(e)=>handleSubmit(e)}>
        <div className= "form-group">
          <label>Description : </label>
          <input  type="text"
                  className="form-control"
                  value={todoDescription}
                  onChange = {e=>setTodoDescriptionState(e.target.value)}/>
        </div>

        <div className = "form-group">
          <label>Responsible : </label>
          <input  type="text"
                  className="form-control"
                  value={todoResponsible}
                  onChange={e=>setTodoResponsibleState(e.target.value)}/>
        </div>
        <div className = "form-group">
          <div className="form-check form-check-inline">
            <input  className ="form-check-input"
                    type="radio"
                    name="priorityOptions"
                    id="priorityLow"
                    value="Low"
                    //checked={()=>setTodoPriorityState("Low")}
                    onChange={e=>setTodoPriorityState(e.target.value)}
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
                    onChange={e=>setTodoPriorityState(e.target.value)}
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
                    onChange={e=>setTodoPriorityState(e.target.value)}
                    />
            <label className="form-check-label">High</label>
          </div>
        </div>
        <div className="form-group">
          <input  type="submit"
                  value="Create To-do List"
                  className="btn btn-primary"/>
        </div>

      </form>
    </div>
  );
}
