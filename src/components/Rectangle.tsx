import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { contrlPointDown, zoom } from "../utils/EventHandler";
type Props = {};

const Rotat = styled.div`
  cursor: pointer;
  cursor: hand;
  position: absolute;
  height: 20px;
  width: 100%;
  top: -10px;
  left: 48%;
  right: 48%;
  display: inline;
`;
const ZoomLeftyTop = styled.div`
  cursor: nw-resize;
  position: absolute;
  height: 20px;
  width: 20px;
  top: -7px;
  left: -7px;
  border: solid 2px #056de8;
  border-right-style: none;
  border-bottom-style: none;
`;
const ZoomLeftBottom = styled.div`
  cursor: sw-resize;
  position: absolute;
  height: 20px;
  width: 20px;
  bottom: -7px;
  left: -7px;
  border: solid 2px #056de8;
  border-right-style: none;
  border-top-style: none;
`;
const ZoomRightTop = styled.div`
  cursor: ne-resize;
  position: absolute;
  height: 20px;
  width: 20px;
  top: -7px;
  right: -7px;
  border: solid 2px #056de8;
  border-left-style: none;
  border-bottom-style: none;
`;
const ZoomRightBottom = styled.div`
  cursor: se-resize;
  position: absolute;
  height: 20px;
  width: 20px;
  bottom: -7px;
  right: -7px;
  border: solid 2px #056de8;
  border-left-style: none;
  border-top-style: none;
`;

const Wapper = styled.div`
  visibility: visible;
  border: 1px #000 dashed;
  width: 100px;
  height: 100px;
  margin: 5px;
  position: absolute;
`;

export const Rectangle = (props: Props) => {
  const isDown = useRef(false);
  const isZoomDown = useRef(false);
  const Pos = useRef({
    top: 0, // 元素的坐标
    left: 0,
    cX: 0, // 鼠标的坐标
    cY: 0,
  });

  const [WapperStyle, setWapperStyle] = useState({
    height: 100,
    width: 100,
    left: 0,
    top: 0,
  });
  const contrlPoint = useRef<HTMLDivElement>(null);
  const WapperElement = useRef<HTMLDivElement>(null);
  const el = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{ position: "absolute" }}
      ref={WapperElement}
      onClick={(event) => {
        contrlPointDown("select", contrlPoint, event, isDown, Pos);
      }}
      onMouseDown={(event) => {
        contrlPointDown("down", WapperElement, event, isDown, Pos);
      }}
      onMouseUp={(event) => {
        contrlPointDown("up", WapperElement, event, isDown, Pos);
      }}
      onMouseMove={(event) => {
        contrlPointDown("move", WapperElement, event, isDown, Pos);
      }}
      onMouseLeave={(event) => {
        contrlPointDown("leave", contrlPoint, event, isDown, Pos);
      }}
    >
      <Wapper
        style={{
          width: `${WapperStyle.height}px`,
          height: `${WapperStyle.width}px`,
          // left: `${WapperStyle.left}px`,
          // top: `${WapperStyle.top}px`,
        }}
        ref={el}
      >
        {WapperStyle.height}
      </Wapper>
      <div ref={contrlPoint} style={{ visibility: "hidden" }}>
        <ZoomLeftyTop
          onMouseDown={(event) => {
            zoom(
              "down",
              contrlPoint,
              event,
              isZoomDown,
              Pos,
              setWapperStyle,
              WapperStyle
            );
          }}
          onMouseUp={(event) => {
            zoom(
              "up",
              contrlPoint,
              event,
              isZoomDown,
              Pos,
              setWapperStyle,
              WapperStyle
            );
          }}
          onMouseMove={(event) => {
            zoom(
              "LeftyTop",
              el,
              event,
              isZoomDown,
              Pos,
              setWapperStyle,
              WapperStyle
            );
          }}
        ></ZoomLeftyTop>
        <ZoomLeftBottom></ZoomLeftBottom>
        <ZoomRightTop></ZoomRightTop>
        <ZoomRightBottom></ZoomRightBottom>
      </div>
    </div>
  );
};
