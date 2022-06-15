/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

// eslint-disable-next-line react/prop-types
const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const addTask = (_id, title) => {
    setTasks([
      ...tasks,
      {
        id: _id,
        title,
      },
    ]);
  };
  const updateTask = (id) => {
    setTasks(tasks.map((item) => (item.id === id ? { ...item } : item)));
  };
  const removeTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
