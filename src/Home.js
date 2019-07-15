import React, { useContext } from 'react';
import { AuthContext } from "./context/AuthContext";

const Home = () => {
  const { isAuth } = useContext(AuthContext);

  const value = `${isAuth}`;
  return (
    <div>
      <p>HOME CONTENT</p>
      <p>IS AUTH CONTEXT VALUE: {value}</p>
    </div>
  );
};

export default Home;
