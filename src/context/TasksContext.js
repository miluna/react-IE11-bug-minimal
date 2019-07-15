import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "./AuthContext";

export const TasksContext = React.createContext({ tasks: [], loading: false });

export const TasksContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuth, identity } = useContext(AuthContext);


  return (
    <TasksContext.Provider value={{ tasks, loading }}>
      {props.children}
    </TasksContext.Provider>
  );
};
