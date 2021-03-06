/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);

// eslint-disable-next-line react/prop-types
const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [channel, setChannel] = useState("none");
  const addTask = (_id, title) => {
    const isInclude = tasks.some((task) => task.id === _id);
    if (isInclude) {
      alert("๐ฏ ์ด๋ฏธ ์กด์ฌํ๋ ๊ฒ์์ด์๋๋ค.");
      return;
    }

    setTasks([
      ...tasks,
      {
        id: _id,
        title,
      },
    ]);
  };
  const removeTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        addTask,
        removeTask,
        channel,
        setChannel,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
