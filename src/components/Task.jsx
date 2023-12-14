import React from "react";
import Done from "../components/Done";
import Delete from "../components/Delete";
import '../css/Task.css'

function Task({ savedTasks, setSavedTasks }) {
  function handleState(index) {
    const updatedTasks = savedTasks.map((savedTask, i) => {
      if (i === index) {
        const updatedTask = {
          task: savedTask.task,
          completed: true,
        };
        return updatedTask;
      }
      return savedTask;
    });
    setSavedTasks(updatedTasks);
  }

  function handleDelete(index) {
    const updatedTask = savedTasks.filter((savedTask, i) => (i !== index));
    setSavedTasks(updatedTask);
  }

  return (
    <>
      {savedTasks.map((savedTask, index) => (
        <div key={index} className="task">
          <h3 className={savedTask.completed ? 'completed' : 'in-progress'}>
            {savedTask.task}
          </h3>
          <div className="actions">
            {!savedTask.completed ? <Done onClick={() => handleState(index)} /> : null}
            <Delete onClick={() => handleDelete(index)} />
          </div>
        </div>
      ))}
    </>
  );
}

export default Task;