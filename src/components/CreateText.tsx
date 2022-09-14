import React, { useRef, useState } from "react";
import {
  Selected,
  Text,
  Contrl,
  ZoomLeftyTop,
  ZoomLeftBottom,
  ZoomRightTop,
  ZoomRightBottom,
} from "../style/GobelStyle";
import { drag, zoom } from "../utils/EventHandler";
type Props = {};

export const CreateText = (props: Props) => {
  const SelectElement = useRef<HTMLDivElement>(null);
  const ContrlElement = useRef<HTMLDivElement>(null);

  const isDown = useRef(false);
  const Pos = useRef({
    top: 0,
    left: 0,
    cX: 0,
    cY: 0,
  });
  const [GlobeStyle, setGlobeStyle] = useState({
    height: 100,
    width: 100,
    top: 0,
    left: 0,
  });

  return (
    <Selected
      onMouseLeave={(event) => {
        drag(
          "leave",
          SelectElement,
          event,
          isDown,
          Pos,
          setGlobeStyle,
          GlobeStyle
        );
      }}
      onMouseUp={(event) => {
        drag(
          "up",
          SelectElement,
          event,
          isDown,
          Pos,
          setGlobeStyle,
          GlobeStyle
        );
      }}
      style={{
        height: GlobeStyle.height + "px",
        width: GlobeStyle.width + "px",
        top: GlobeStyle.top + "px",
        left: GlobeStyle.left + "px",
      }}
      ref={SelectElement}
    >
      <Text
        onMouseDown={(event) => {
          drag(
            "down",
            SelectElement,
            event,
            isDown,
            Pos,
            setGlobeStyle,
            GlobeStyle
          );
        }}
        onMouseMove={(event) => {
          drag(
            "move",
            SelectElement,
            event,
            isDown,
            Pos,
            setGlobeStyle,
            GlobeStyle
          );
        }}
      ></Text>
      <Contrl ref={ContrlElement}>
        <ZoomLeftyTop
          onMouseDown={(event) => {
            zoom(
              "LeftTop",
              "down",
              SelectElement,
              event,
              isDown,
              Pos,
              setGlobeStyle,
              GlobeStyle
            );
          }}
          onMouseMove={(event) => {
            zoom(
              "LeftTop",
              "move",
              SelectElement,
              event,
              isDown,
              Pos,
              setGlobeStyle,
              GlobeStyle
            );
          }}
          onMouseUp={(event) => {
            zoom(
              "LeftTop",
              "up",
              SelectElement,
              event,
              isDown,
              Pos,
              setGlobeStyle,
              GlobeStyle
            );
          }}
          onMouseLeave={(event) => {
            zoom(
              "LeftTop",
              "leave",
              SelectElement,
              event,
              isDown,
              Pos,
              setGlobeStyle,
              GlobeStyle
            );
          }}
        ></ZoomLeftyTop>
        <ZoomLeftBottom
          onMouseDown={(event) => {
            zoom(
              "LeftTop",
              "down",
              SelectElement,
              event,
              isDown,
              Pos,
              setGlobeStyle,
              GlobeStyle
            );
          }}
          onMouseMove={(event) => {
            zoom(
              "LeftBottom",
              "move",
              SelectElement,
              event,
              isDown,
              Pos,
              setGlobeStyle,
              GlobeStyle
            );
          }}
          onMouseUp={(event) => {
            zoom(
              "LeftBottom",
              "up",
              SelectElement,
              event,
              isDown,
              Pos,
              setGlobeStyle,
              GlobeStyle
            );
          }}
          onMouseLeave={(event) => {
            zoom(
              "LeftBottom",
              "leave",
              SelectElement,
              event,
              isDown,
              Pos,
              setGlobeStyle,
              GlobeStyle
            );
          }}
        ></ZoomLeftBottom>
        <ZoomRightTop
          onMouseDown={(event) => {
            zoom(
              "LeftTop",
              "down",
              SelectElement,
              event,
              isDown,
              Pos,
              setGlobeStyle,
              GlobeStyle
            );
          }}
          onMouseMove={(event) => {
            zoom(
              "RightTop",
              "move",
              SelectElement,
              event,
              isDown,
              Pos,
              setGlobeStyle,
              GlobeStyle
            );
          }}
          onMouseUp={(event) => {
            zoom(
              "RightTop",
              "up",
              SelectElement,
              event,
              isDown,
              Pos,
              setGlobeStyle,
              GlobeStyle
            );
          }}
          onMouseLeave={(event) => {
            zoom(
              "RightTop",
              "leave",
              SelectElement,
              event,
              isDown,
              Pos,
              setGlobeStyle,
              GlobeStyle
            );
          }}
        ></ZoomRightTop>
        <ZoomRightBottom
          onMouseDown={(event) => {
            zoom(
              "RightBottom",
              "down",
              SelectElement,
              event,
              isDown,
              Pos,
              setGlobeStyle,
              GlobeStyle
            );
          }}
          onMouseMove={(event) => {
            zoom(
              "RightBottom",
              "move",
              SelectElement,
              event,
              isDown,
              Pos,
              setGlobeStyle,
              GlobeStyle
            );
          }}
          onMouseUp={(event) => {
            zoom(
              "RightBottom",
              "up",
              SelectElement,
              event,
              isDown,
              Pos,
              setGlobeStyle,
              GlobeStyle
            );
          }}
          onMouseLeave={(event) => {
            zoom(
              "RightBottom",
              "leave",
              SelectElement,
              event,
              isDown,
              Pos,
              setGlobeStyle,
              GlobeStyle
            );
          }}
        ></ZoomRightBottom>
      </Contrl>
    </Selected>
  );
};
