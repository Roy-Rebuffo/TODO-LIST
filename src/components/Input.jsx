import React, { useState } from "react";

function Input({ addTask }) {
  const [task, setTask] = useState("");

  function submitInput(e) {
    e.preventDefault();

    if (!task) {
      alert("Debes añadir una tarea");
      return;
    }

    addTask({ task: task, completed: false });
    setTask("");
  }

  function handleInput(e) {
    setTask(e.target.value);
  }

  return (
    <>
      <form onSubmit={submitInput}>
        <input type="text" name="task" value={task} onChange={handleInput} />
        <button type="submit" className="add">
          Add task
        </button>
      </form>
      <h2>Task List</h2>
    </>
  );
}
export default Input;
