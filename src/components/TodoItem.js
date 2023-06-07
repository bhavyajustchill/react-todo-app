import React from "react";

export default function TodoItem({ id, task, completed, onToggle, handleDeleteTask }) {
  const handleToggle = () => {
    onToggle(id);
  };

  return (
    <div className="card my-3">
      <div className="card-body">
        <div className={`todo-item ${completed ? "completed" : ""}`}>
          <input type="checkbox" class="mx-3 mt-3" checked={completed} onChange={handleToggle} />
          <span style={{ textDecoration: completed ? "line-through" : "" }}>{task}</span>
          <div className="float-end">
            <button
              type="button"
              onClick={() => handleDeleteTask(id)}
              className="btn btn-link text-danger rounded-circle">
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
