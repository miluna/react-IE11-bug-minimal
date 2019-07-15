import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

export const AuthContext = React.createContext({
  isAuth: false,
  checked: false,
  role: "",
  identity: "",
});

const AuthGuard = ({ history, children }) => {
  const [isAuth, setAuth] = useState(false);
  const [checked, setChecked] = useState(false);
  const [role, setRole] = useState("");
  const [identity, setIdentity] = useState("");

  return (
    <AuthContext.Provider value={{ isAuth, checked, role, identity }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthProvider = withRouter(AuthGuard);
