import React from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../hooks";
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
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return <Wapper>{count}</Wapper>;
};
