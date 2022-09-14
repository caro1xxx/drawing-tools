import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../hooks";
import { push } from "../store/ItemSlice";
type Props = {};

const Wapper = styled.div`
  background-color: #fff;
  border: 2px solid rgb(239, 239, 239);
  border-radius: 5px;
  top: 10px;
  bottom: 10px;
  position: fixed;
  right: 10px;
  z-index: 100;
  padding: 10px 10px;
`;

const Rectangle = styled.div`
  /* border: 2px #000 solid; */
  width: 20px;
  height: 20px;
  background-color: black;
`;

const Rriangular = styled.div`
  /* border: 2px #000 solid; */
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom: 20px solid #000;
`;

const Circle = styled.div`
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 25px;
  margin-top: 10px;
`;

const Line = styled.div`
  margin: 10px 0px;
`;

const Text = styled.div`
  font-size: 10px;
  width: 20px;
  height: 20px;
  font-weight: bold;
`;

const Select = styled.div`
  width: 20px;
  height: 20px;
  margin: 5px 2px;
`;

export const Index = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <Wapper>
      <Rectangle onClick={() => dispatch(push("Rectangle"))}></Rectangle>
      <Rriangular onClick={() => dispatch(push("Triangular"))}></Rriangular>
      <Circle onClick={() => dispatch(push("Circle"))}></Circle>
      <Line onClick={() => dispatch(push("Line"))}>
        <div
          style={{
            display: "inline-block",
            width: "10px",
            height: "20px",
          }}
        ></div>
        <div
          style={{
            display: "inline-block",
            width: "4px",
            backgroundColor: "#000",
            height: "25px",
          }}
        ></div>
        <div
          style={{
            display: "inline-block",
            width: "10px",
            height: "20px",
          }}
        ></div>
      </Line>
      <Text onClick={() => dispatch(push("Text"))}>Text</Text>
      <Select>
        <svg
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3984"
          width="20"
          height="20"
        >
          <path
            d="M972.8 0H51.2a51.2 51.2 0 0 0-51.2 51.2v716.8a51.2 51.2 0 0 0 51.2 51.2h307.2a51.2 51.2 0 0 0 0-102.4H102.4V102.4h819.2v358.4a51.2 51.2 0 0 0 102.4 0V51.2a51.2 51.2 0 0 0-51.2-51.2z"
            fill="#000000"
            p-id="3985"
          ></path>
          <path
            d="M532.992 375.296a25.6 25.6 0 0 0-40.96 23.552l81.92 603.136a25.6 25.6 0 0 0 17.92 20.992h7.68a25.6 25.6 0 0 0 18.944-8.704l120.32-134.144 67.072 115.712a51.2 51.2 0 1 0 88.576-51.2l-67.072-116.224 176.128-37.376a25.6 25.6 0 0 0 10.24-45.056z"
            fill="#000000"
            p-id="3986"
          ></path>
        </svg>
      </Select>
    </Wapper>
  );
};
