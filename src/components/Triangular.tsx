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
} from "../style/ShapeStyle";
import { drag } from "../utils/EventHandler";
import { changePos } from "../store/ItemSlice";
type Props = {
  borderColor: string;
  initColor: string;
};

export const Triangular = (props: Props) => {
  const SelectElement = useRef<HTMLDivElement>(null);
  const WapperElement = useRef<HTMLDivElement>(null);
  const item = useAppSelector((state) => state.item.value);
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
        <TriangularLeftEdge
          style={{ backgroundColor: props.borderColor }}
        ></TriangularLeftEdge>
        <TriangularRightEdge
          style={{ backgroundColor: props.borderColor }}
        ></TriangularRightEdge>
        <TriangulaBottomEdge
          style={{ backgroundColor: props.borderColor }}
        ></TriangulaBottomEdge>
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
