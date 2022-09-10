import React from "react";
import "./App.css";
import { Index as NavBar } from "./NavBar/index";
import { Index as Fabric } from "./depiction/rectangle";
function App() {
  return (
    <div className="App">
      <Fabric></Fabric>
      <NavBar></NavBar>
    </div>
  );
}

export default App;
