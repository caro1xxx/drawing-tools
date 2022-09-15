import React from "react";
import "./App.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { Index as NavBar } from "./navbar/index";
import { Index as Borad } from "./borad/index";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Borad></Borad>
        <NavBar></NavBar>
      </div>
    </Provider>
  );
}

export default App;
