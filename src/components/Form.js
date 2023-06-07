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
            className="btn mx-2 rounded-circle"
            onClick={handleAddTask}
            style={{ backgroundColor: "#128c7e", color: "#fff" }}>
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </form>
    </>
  );
}
