import React, { useEffect } from "react";
import GlobalStyles from "./components/GlobalStyles";
import { Route } from "react-router-dom";
// components and pages
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
