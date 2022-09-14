import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../hooks";
import { Rectangle } from "../components/Rectangle";
import { Circle } from "../components/Circle";
import { Triangular } from "../components/Triangular";
import { Message } from "../components/Message";
import { Line } from "../components/Line";
import { CreateText as Text } from "../components/CreateText";
type Props = {};

export const Index = (props: Props) => {
  const current = useAppSelector((state) => state.item.value);
  const notice = useAppSelector((state) => state.notice.value);

  return (
    <div>
      {notice === "" ? <></> : <Message></Message>}
      {current.map((item, index) => {
        switch (item.type) {
          case "Rectangle":
            return <Rectangle key={item.id}></Rectangle>;
          case "Circle":
            return <Circle key={item.id}></Circle>;
          case "Triangular":
            return <Triangular key={item.id}></Triangular>;
          case "Line":
            return <Line key={item.id}></Line>;
          case "Text":
            return <Text key={item.id}></Text>;
        }
      })}
    </div>
  );
};
