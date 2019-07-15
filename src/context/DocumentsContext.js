import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "./AuthContext";

export const DocumentsContext = React.createContext({ requests: [], loading: false });

export const DocumentsContextProvider = (props) => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuth, identity } = useContext(AuthContext);

  return (
    <DocumentsContext.Provider value={{ documents, loading }}>
      {props.children}
    </DocumentsContext.Provider>
  );
};
