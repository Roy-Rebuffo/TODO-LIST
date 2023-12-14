import React, { useState } from "react";
import "../css/App.css";
import Header from "./Header";
import Input from "./Input";
import Task from "./Task";

const baseTasks = [
  { task: "Comprar harina, jamón y pan rallado", completed: true },
  { task: "Hacer croquetas", completed: true },
  { task: "Ir al gimnasio", completed: false },
  { task: "estudiar React", completed: false },
  { task: "Irme a vivir a Bali", completed: false },
];

function App() {
  const [savedTasks, setSavedTasks] = useState(baseTasks);

  function addTask({ task }) {
    const savedTask = { task: task, completed: false };
    const newTaskList = [...savedTasks, savedTask];
    setSavedTasks(newTaskList);
  }
  return (
    <div className="app">
      <Header></Header>
      <div className="app-box">
        <Input addTask={addTask}></Input>
        <Task savedTasks={savedTasks} setSavedTasks={setSavedTasks}></Task>
        
      </div>
    </div>
  );
}

export default App;
