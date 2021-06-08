import React from 'react';
import { Switch, Route } from "react-router-dom";

import Homepage from "../Homepage/Homepage";
import Userpage from "../Userpage/Userpage";
import Form from "../Form/Form";

import './App.scss';

function App() {
  return (
    <div className="App">
          <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/users/:id" exact component={Userpage} />
              <Route path="/add-user" exact component={Form} />
          </Switch>
    </div>
  );
}

export default App;
