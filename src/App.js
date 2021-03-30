import React, { useEffect } from "react";
import GlobalStyles from "./components/GlobalStyles";
// components and pages
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <h1>Ignite</h1>
      <Home />
    </div>
  );
}

export default App;
