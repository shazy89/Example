import React from "react";
import Home from "./Home";
import MyForm from "./practice/MyForm";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div style={{ height: "100%" }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />;
          <Route exact path="/myform" component={MyForm} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
