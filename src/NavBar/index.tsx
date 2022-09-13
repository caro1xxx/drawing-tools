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
  background-color: black;
  width: 2px;
  height: 25px;
  transform: rotate(50deg);
  margin: 10px auto;
`;
export const Index = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <Wapper>
      <Rectangle onClick={() => dispatch(push("Rectangle"))}></Rectangle>
      <Rriangular onClick={() => dispatch(push("Triangular"))}></Rriangular>
      <Circle onClick={() => dispatch(push("Circle"))}></Circle>
      <Line onClick={() => dispatch(push("Line"))}></Line>
    </Wapper>
  );
};
