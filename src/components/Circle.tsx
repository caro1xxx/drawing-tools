import React, { useRef, useState } from "react";
import {
  Selected,
  Contrl,
  ZoomLeftyTop,
  ZoomLeftBottom,
  ZoomRightTop,
  ZoomRightBottom,
  CircleWapper,
} from "../style/GobelStyle";
import { drag, zoom } from "../utils/EventHandler";
import { useAppSelector, useAppDispatch } from "../hooks";
import { changePos } from "../store/ItemSlice";
type Props = {
  borderColor: string;
};

export const Circle = (props: Props) => {
  const SelectElement = useRef<HTMLDivElement>(null);
  const WapperElement = useRef<HTMLDivElement>(null);
  const ContrlElement = useRef<HTMLDivElement>(null);
  const item = useAppSelector((state) => state.item.value);
  const dispatch = useAppDispatch();
  const isDown = useRef(false);
  const Pos = useRef({
    top: 0,
    left: 0,
    cX: 0,
    cY: 0,
  });
  const [GlobeStyle, setGlobeStyle] = useState({
    height: item[item.length - 1].height,
    width: item[item.length - 1].width,
    top: 0,
    left: 0,
    storeId: item[item.length - 1].id,
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
        dispatch(changePos(GlobeStyle));
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
      <CircleWapper
        /*
        
          用于控制圆角度数
        
        */
        style={{
          borderRadius: GlobeStyle.height + "px",
          border: `1px ${props.borderColor} dashed`,
        }}
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
        ref={WapperElement}
      ></CircleWapper>
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
