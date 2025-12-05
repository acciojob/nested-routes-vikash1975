import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Layout";
import Women from "./Women";
import Items from "./Items";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/women" component={Women} />
        <Route exact path="/women/:subCategoryName" component={Items} />
      </Switch>
    </Router>
  );
}

export default App;