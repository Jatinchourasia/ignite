import React, { useEffect } from "react";
import GlobalStyles from "./components/GlobalStyles";
import { Route, useHistory } from "react-router-dom";

import Nav from "./components/nav";
// components and pages
import Home from "./pages/Home";
const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
};

export default App;
