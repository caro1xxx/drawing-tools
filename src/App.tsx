import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { Index as NavBar } from "./navbar/index";
import { Index as Borad } from "./borad/index";
import { InitBorad } from "./components/InitBorad";

function App() {
  const [BoradState, setBoradState] = useState({
    height: "1000",
    width: "100%",
    isShowBoradInit: true,
  });

  const InitialPanelSize = (height: string, width: string) => {
    setBoradState({
      height: height,
      // 判断width是否带%,如果带百分号就不管,如果没有就加上px
      width: width.indexOf("%") > -1 ? width : width + "px",
      isShowBoradInit: false,
    });
  };

  return (
    <Provider store={store}>
      <div
        className="App"
        style={{ height: BoradState.height + "px", width: BoradState.width }}
      >
        <Borad></Borad>
        <NavBar></NavBar>
        {BoradState.isShowBoradInit ? (
          <InitBorad changeBoradSize={InitialPanelSize}></InitBorad>
        ) : (
          <></>
        )}
      </div>
    </Provider>
  );
}

export default App;
