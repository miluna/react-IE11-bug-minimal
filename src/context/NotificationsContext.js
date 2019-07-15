import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "./AuthContext";

export const NotificationsContext = React.createContext({ notifications: [], loading: false });

export const NotificationsContextProvider = (props) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuth, identity } = useContext(AuthContext);


  return (
    <NotificationsContext.Provider value={{ notifications, loading }}>
      {props.children}
    </NotificationsContext.Provider>
  );
};
