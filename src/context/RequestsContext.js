import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "./AuthContext";

export const RequestsContext = React.createContext({ requests: [], loading: false });

export const RequestsContextProvider = (props) => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuth, identity } = useContext(AuthContext);


  return (
    <RequestsContext.Provider value={{ requests, loading }}>
      {props.children}
    </RequestsContext.Provider>
  );
};
