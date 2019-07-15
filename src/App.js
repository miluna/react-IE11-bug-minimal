import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Providers from "./context/Providers";
import Home from "./Home";
import Foo from "./Foo";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Providers>
          <Route exact path="/" component={Home}/>
          <Route exact path="/foo" component={Foo}/>
        </Providers>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
