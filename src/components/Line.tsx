import React, { useRef } from "react";
import styled from "styled-components";
type Props = {};

const Rotat = styled.div`
  cursor: pointer;
  cursor: hand;
  position: absolute;
  height: 20px;
  width: 20px;
  right: 40%;
  left: 40%;
  border: solid 2px #056de8;
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

const Selected = styled.div`
  position: absolute;
  border: 2px #056de8 solid;
  visibility: hidden;
`;

const Wapper = styled.div`
  visibility: visible;
  background-color: black;
  width: 2px;
  height: 100px;
  margin: 5px;
`;

export const Line = (props: Props) => {
  const el = useRef(null);
  const wapperEl = useRef(null);
  const zoomEl = useRef(null);
  const prevMouseXY = {
    X: 0,
    Y: 0,
  };

  // 鼠标被按下
  const MouseDown = (
    el: React.MutableRefObject<null>,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // 显示选中边框
    (el as any).current.style.visibility = "visible";
    // 获取鼠标距离盒子的距离 (left)
    let leftInterval: number =
      e.pageX -
      Number(
        (el as any).current.style.left.substring(
          0,
          (el as any).current.style.left.length - 2
        )
      );
    // 获取鼠标距离盒子的距离 (top)
    let topInterval: number =
      e.pageY -
      Number(
        (el as any).current.style.top.substring(
          0,
          (el as any).current.style.top.length - 2
        )
      );

    // 鼠标按下并且正在移动
    document.onmousemove = (e) => {
      let x = e.pageX - leftInterval;
      (el as any).current.style.left = x + "px";
      let y = e.pageY - topInterval;
      (el as any).current.style.top = y + "px";
    };

    // 取消事件
    document.onmouseup = () => {
      // 隐藏选择边框
      (el as any).current.style.visibility = "hidden";
      // 如果鼠标放开那么就清空事件监听
      document.onmousemove = null;
    };
  };

  // 鼠标移入
  const MouseEnter = () => {
    (zoomEl as any).current.style.visibility = "visible";
  };
  // 鼠标移出
  const MouseLeave = () => {
    (zoomEl as any).current.style.visibility = "hidden";
  };

  // 缩放
  const zoom = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let wapperELWitdh = (wapperEl as any).current.style.width;
    let wapperELHeight = (wapperEl as any).current.style.height;
    if (wapperELWitdh === "") {
      wapperELWitdh = (wapperEl as any).current.offsetWidth + "px";
      wapperELHeight = (wapperEl as any).current.offsetHeight + "px";
    }
    if (prevMouseXY.X === 0) {
      prevMouseXY.X = e.pageX;
      prevMouseXY.Y = e.pageX;
    }
    document.onmousemove = (e) => {
      let width: number =
        Number(wapperELWitdh.substring(0, wapperELWitdh.length - 2)) +
        e.pageX -
        prevMouseXY.X;
      (wapperEl as any).current.style.width = width + "px";
      prevMouseXY.X = e.pageX;

      let height: number =
        Number(wapperELHeight.substring(0, wapperELHeight.length - 2)) +
        e.pageY -
        prevMouseXY.Y;
      (wapperEl as any).current.style.height = height + "px";
      prevMouseXY.Y = e.pageY;
    };
    // 取消事件
    document.onmouseup = () => {
      prevMouseXY.X = 0;
      prevMouseXY.Y = 0;
      // 隐藏选择边框
      (el as any).current.style.visibility = "hidden";
      // 如果鼠标放开那么就清空事件监听
      document.onmousemove = null;
    };
  };

  const rotating = () => {};

  return (
    <Selected
      ref={el}
      onMouseEnter={() => {
        MouseEnter();
      }}
      onMouseLeave={() => {
        MouseLeave();
      }}
    >
      <Wapper
        ref={wapperEl}
        onMouseDown={(e) => {
          MouseDown(el, e);
        }}
      ></Wapper>
      <div
        ref={zoomEl}
        onMouseDown={(e) => {
          zoom(e);
        }}
        style={{ visibility: "hidden" }}
      >
        <ZoomLeftyTop></ZoomLeftyTop>
        <ZoomLeftBottom></ZoomLeftBottom>
        <ZoomRightTop></ZoomRightTop>
        <ZoomRightBottom></ZoomRightBottom>
        <Rotat></Rotat>
      </div>
    </Selected>
  );
};
