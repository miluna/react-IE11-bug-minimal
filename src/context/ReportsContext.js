import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "./AuthContext";

export const ReportsContext = React.createContext({ reports: [], loading: false });

export const ReportsContextProvider = (props) => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuth, identity } = useContext(AuthContext);


  return (
    <ReportsContext.Provider value={{ reports, loading }}>
      {props.children}
    </ReportsContext.Provider>
  );
};
