import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { changeColor } from "../store/ItemSlice";
import { useAppDispatch } from "../hooks";
type Props = {};

const Color = styled.input`
  border: none;
  height: 25px;
  width: 25px;
  box-sizing: none;
  padding: 0px;
  margin: 0px;
`;

export const Palette = (props: Props) => {
  const dispatch = useAppDispatch();
  const saveColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeColor(event.target.value));
  };

  return (
    <Color
      type="color"
      onChange={(event) => saveColor(event)}
      defaultValue={"#ffffff"}
    />
  );
};
