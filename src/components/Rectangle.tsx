import React, { useRef, useState } from "react";
import styled from "styled-components";
import { drag } from "../utils/EventHandler";
type Props = {};

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

const Selected = styled.div`
  position: relative;
  border: 2px #056de8 solid;
  width: 100px;
  height: 100px;
  visibility: hidden;
  padding: 4px 6px 6px 4px;
`;

const Wapper = styled.div`
  visibility: visible;
  border: 1px #000 dashed;
  width: 100%;
  height: 100%;
`;

const Contrl = styled.div`
  visibility: inherit;
`;

export const Rectangle = (props: Props) => {
  const SelectElement = useRef<HTMLDivElement>(null);
  const WapperElement = useRef<HTMLDivElement>(null);
  const ContrlElement = useRef<HTMLDivElement>(null);

  const isDown = useRef(false);
  const Pos = useRef({
    top: 0, // 元素的坐标
    left: 0,
    cX: 0, // 鼠标的坐标
    cY: 0,
  });
  const [GlobeStyle, setGlobeStyle] = useState({
    height: 100,
    width: 100,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
        right: GlobeStyle.right + "px",
        bottom: GlobeStyle.bottom + "px",
      }}
      ref={SelectElement}
    >
      <Wapper
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
      ></Wapper>
      <Contrl ref={ContrlElement}>
        <ZoomLeftyTop></ZoomLeftyTop>
        <ZoomLeftBottom></ZoomLeftBottom>
        <ZoomRightTop></ZoomRightTop>
        <ZoomRightBottom></ZoomRightBottom>
      </Contrl>
    </Selected>
  );
};
