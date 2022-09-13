import React, { useEffect, useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { Rectangle } from "../components/Rectangle";
import { Circle } from "../components/Circle";
import { Triangular } from "../components/Triangular";
import { Message } from "../components/Message";
type Props = {};

export const Index = (props: Props) => {
  const current = useAppSelector((state) => state.item.value);

  return (
    <div>
      <Message></Message>
      {current.map((item, index) => {
        switch (item.type) {
          case "Rectangle":
            return <Rectangle key={item.id}></Rectangle>;
          case "Circle":
            return <Circle key={item.id}></Circle>;
          case "Triangular":
            return <Triangular key={item.id}></Triangular>;
        }
      })}
    </div>
  );
};
