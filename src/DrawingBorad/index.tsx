import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { fabric } from "fabric";
import { Rectangle } from "../utils/rectangle";

type Props = {};

export const Index = (props: Props) => {
  // 初始化画板
  const initDrawingBorad = (el: string | HTMLCanvasElement | null) => {
    const canvas = new fabric.Canvas(el, {
      height: 1000,
      width: 1000,
    });
    return canvas;
  };

  const canvasEl = useRef(null);
  useEffect(() => {
    initDrawingBorad(canvasEl.current);
    // Rectangle(100, 100, initDrawingBorad(canvasEl.current, {}));
  }, []);

  return (
    <canvas
      style={{
        backgroundColor: "rgba(255, 255, 255, 0)",
      }}
      ref={canvasEl}
    />
  );
};
