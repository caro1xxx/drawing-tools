import React, { useRef } from "react";
import styled from "styled-components";
type Props = {};

const Selected = styled.div`
  position: absolute;
  border: 2px #056de8 solid;
  visibility: hidden;
`;

const Wapper = styled.div`
  visibility: visible;
  border: 1px #000 dashed;
  width: 100px;
  height: 100px;
  margin: 5px;
`;

export const Rectangle = (props: Props) => {
  const el = useRef(null);

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

  return (
    <Selected
      ref={el}
      onMouseDown={(e) => {
        MouseDown(el, e);
      }}
    >
      <Wapper></Wapper>
    </Selected>
  );
};
