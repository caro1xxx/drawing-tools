import React, { useEffect, useRef } from "react";

import { fabric } from "fabric";
import "./index.css";
export const Index = () => {
  const canvasEl = useRef(null);
  useEffect(() => {
    const canvas = new fabric.Canvas(canvasEl.current, {
      height: "300",
      width: "400  ",
    });
    // 创建一个长方形
    const rect = new fabric.Rect({
      top: 30, // 距离容器顶部 30px
      left: 30, // 距离容器左侧 30px
      width: 100, // 宽 100px
      height: 60, // 高 60px
      fill: "red", // 填充 红色
    });

    // 在canvas画布中加入矩形（rect）。add是“添加”的意思
    canvas.add(rect);
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
