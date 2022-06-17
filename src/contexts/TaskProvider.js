/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

// eslint-disable-next-line react/prop-types
const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [channel, setChannel] = useState("");
  const [standard, setStandard] = useState("");
  const addTask = (_id, title) => {
    const isInclude = tasks.some((task) => task.id === _id);
    if (isInclude) {
      console.log("이미 존재하는 검색어입니다.");
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

  const selectChannel = (id) => {
    setChannel(id);
  };

  const selectStandard = (str) => {
    setStandard(str);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        channel,
        standard,
        selectChannel,
        selectStandard,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
