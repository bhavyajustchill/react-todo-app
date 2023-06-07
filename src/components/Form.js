import React from "react";

export default function Form({ newTask, handleAddTask, setNewTask }) {
  return (
    <>
      <form>
        <div className="input-group">
          <input
            type="text"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            className="form-control"
            placeholder="Enter Task Name..."
          />
          <button
            type="button"
            className="btn btn-primary mx-2 rounded-circle"
            onClick={handleAddTask}>
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </form>
    </>
  );
}
