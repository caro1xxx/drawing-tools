import React from "react";
import { useAppSelector } from "../hooks";
import Rectangle from "../components/Rectangle";
import { Circle } from "../components/Circle";
import { Triangular } from "../components/Triangular";
import { Message } from "../components/Message";
import { Line } from "../components/Line";
import { CreateText as Text } from "../components/CreateText";
import { CreateMouseCursor as Cursor } from "../components/CreateMouseCursor";
type Props = {};

export const Index = (props: Props) => {
  const current = useAppSelector((state) => state.item.value);
  const notice = useAppSelector((state) => state.notice.value);
  const cursor = useAppSelector((state) => state.cursor);

  return (
    <div>
      {notice === "" ? <></> : <Message></Message>}
      {current.map((item, index) => {
        switch (item.type) {
          case "Rectangle":
            return (
              <Rectangle
                initColor={item.initColor}
                borderColor={item.selection}
                key={item.id}
              ></Rectangle>
            );
          case "Circle":
            return (
              <Circle
                initColor={item.initColor}
                borderColor={item.selection}
                key={item.id}
              ></Circle>
            );
          case "Triangular":
            return (
              <Triangular
                initColor={item.initColor}
                borderColor={item.selection}
                key={item.id}
              ></Triangular>
            );
          case "Line":
            return <Line borderColor={item.selection} key={item.id}></Line>;
          case "Text":
            return (
              <Text
                initColor={item.initColor}
                borderColor={item.selection}
                key={item.id}
              ></Text>
            );
        }
      })}
      {cursor.navbarShowCursor ? <Cursor></Cursor> : <></>}
    </div>
  );
};
