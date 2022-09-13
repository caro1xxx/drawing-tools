import React, { useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { change } from "../store/notify";
import {
  Selected,
  Contrl,
  ZoomLeftyTop,
  ZoomLeftBottom,
  ZoomRightTop,
  ZoomRightBottom,
  TriangularWapper,
  TriangularLeftEdge,
  TriangularRightEdge,
  TriangulaBottomEdge,
} from "../style/GobelStyle";
import { drag } from "../utils/EventHandler";
type Props = {};

export const Triangular = (props: Props) => {
  const SelectElement = useRef<HTMLDivElement>(null);
  const WapperElement = useRef<HTMLDivElement>(null);

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
  const notice = useAppSelector((state) => state.notice.value);
  const dispatch = useAppDispatch();
  const prevent = () => {
    if (notice === "三角形暂不支持缩放") return;
    dispatch(change("三角形暂不支持缩放"));
  };

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
      <TriangularWapper
        /*
        
          用于控制圆角度数
        
        */
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
      >
        <TriangularLeftEdge></TriangularLeftEdge>
        <TriangularRightEdge></TriangularRightEdge>
        <TriangulaBottomEdge></TriangulaBottomEdge>
      </TriangularWapper>
      <Contrl onMouseDown={prevent}>
        <ZoomLeftyTop></ZoomLeftyTop>
        <ZoomLeftBottom></ZoomLeftBottom>
        <ZoomRightTop></ZoomRightTop>
        <ZoomRightBottom></ZoomRightBottom>
      </Contrl>
    </Selected>
  );
};
