import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TodoItem from "./TodoItem";
import "react-tabs/style/react-tabs.css";
import "./TodoList.css";

export default function TodoList({ todos, handleToggle, handleDeleteTask }) {
  return (
    <>
      <div className="container">
        <Tabs>
          <TabList>
            <Tab>All Tasks</Tab>
            <Tab>Incomplete</Tab>
            <Tab>Completed</Tab>
          </TabList>

          <TabPanel>
            <div className="container-fluid">
              {todos.length > 0 ? (
                todos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    completed={todo.completed}
                    onToggle={handleToggle}
                    handleDeleteTask={handleDeleteTask}
                  />
                ))
              ) : (
                <h2>No Tasks</h2>
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="container-fluid">
              {todos.filter((todo) => !todo.completed).length > 0 ? (
                todos.map((todo) =>
                  todo.completed === false ? (
                    <TodoItem
                      key={todo.id}
                      id={todo.id}
                      task={todo.task}
                      completed={todo.completed}
                      onToggle={handleToggle}
                      handleDeleteTask={handleDeleteTask}
                    />
                  ) : null
                )
              ) : (
                <h2>No Tasks</h2>
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="container-fluid">
              {todos.filter((todo) => todo.completed).length > 0 ? (
                todos.map((todo) =>
                  todo.completed ? (
                    <TodoItem
                      key={todo.id}
                      id={todo.id}
                      task={todo.task}
                      completed={todo.completed}
                      onToggle={handleToggle}
                      handleDeleteTask={handleDeleteTask}
                    />
                  ) : null
                )
              ) : (
                <h2>No Tasks</h2>
              )}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
