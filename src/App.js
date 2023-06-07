import "./App.css";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [id, setId] = useState(0);
  const [todos, setTodos] = useState([]);
  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };
  const [newTask, setNewTask] = useState("");
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTodo = {
        id: id + 1,
        task: newTask,
        completed: false,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setId(id + 1);
      setNewTask("");
    }
  };

  const handleDeleteTask = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="container text-center mt-4 mb-4">
        <h1>Todo App</h1>
        <h6>Your easy-to-use Task Management Application!</h6>
      </div>
      <div className="container mb-4">
        <Form newTask={newTask} handleAddTask={handleAddTask} setNewTask={setNewTask} />
      </div>
      <TodoList handleDeleteTask={handleDeleteTask} todos={todos} handleToggle={handleToggle} />
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "94%",
          height: "60px",
          backgroundColor: "#ffffe0",
        }}>
        <span className="float-end pt-3">
          Made with{" "}
          <span className="text-danger">
            <i className="fa fa-heart"></i>
          </span>{" "}
          by BhavyaJustChill
        </span>
      </div>
    </>
  );
}

export default App;
