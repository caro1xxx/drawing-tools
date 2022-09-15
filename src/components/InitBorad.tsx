import React, { useState } from "react";
import styled from "styled-components";
type Props = {
  changeBoradSize: (height: string, width: string) => void;
};

const Wapper = styled.div`
  background-color: #d3d3d375;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 200;
`;

const Body = styled.div`
  background-color: white;
  position: absolute;
  top: 20%;
  left: 40%;
  right: 40%;
  border: 1px solid #eee;
  border-radius: 10px;
  z-index: 201;
  padding: 10px;
`;

const Input = styled.input`
  background-color: #eee;
  border: none;
  outline: none;
  border-radius: 5px;
  width: 50px;
  margin-right: 20px;
`;

const Button = styled.button`
  background-color: #056de8;
  border: none;
  height: 30px;
  width: 100%;
  border-radius: 10px;
  color: white;
  margin: 10px 0px;
`;

export const InitBorad = (props: Props) => {
  const [BoradState, setBoradState] = useState({
    height: "1000",
    width: "100%",
  });

  const change = (type: string, event: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "height") {
      setBoradState({
        height: event.target.value,
        width: BoradState.width,
      });
    } else {
      setBoradState({
        height: BoradState.height,
        width: event.target.value,
      });
    }
  };

  return (
    <Wapper>
      <Body>
        <div style={{ fontSize: "20px", textAlign: "center" }}>初始化画板</div>
        <hr></hr>
        <div style={{ textAlign: "center" }}>
          <label>高度:</label>
          <Input
            value={BoradState.height}
            onChange={(event) => {
              change("height", event);
            }}
          ></Input>
          <label>宽度:</label>
          <Input
            value={BoradState.width}
            onChange={(event) => {
              change("width", event);
            }}
          ></Input>
        </div>
        <Button
          onClick={() => {
            props.changeBoradSize(BoradState.height, BoradState.width);
          }}
        >
          确定
        </Button>
      </Body>
    </Wapper>
  );
};
