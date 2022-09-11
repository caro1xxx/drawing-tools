import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../hooks";
import { create } from "../store/counterSlice";
type Props = {};

const Wapper = styled.div`
  background-color: #056de8;
  height: 100px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  z-index: 100;
`;
export const Index = (props: Props) => {
  const dispatch = useAppDispatch();
  return <Wapper onClick={() => dispatch(create())}>1</Wapper>;
};
