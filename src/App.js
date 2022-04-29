import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import WaitingList from "./pages/WaitingList";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/waiting-list" exact component={WaitingList} />
    </Router>
  );
}

export default App;
