import React, { useEffect, useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { Rectangle } from "../components/Rectangle";
import { Circle } from "../components/Circle";
type Props = {};

export const Index = (props: Props) => {
  const current = useAppSelector((state) => state.current.value);

  return (
    <div>
      {current.map((item, index) => {
        switch (item.type) {
          case "Rectangle":
            return <Rectangle key={item.id}></Rectangle>;
          case "Circle":
            return <Circle key={item.id}></Circle>;
        }
      })}
    </div>
  );
};
