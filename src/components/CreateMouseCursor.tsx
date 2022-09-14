import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { changeCursorState, changeNavBarCursor } from "../store/Cursor";

type Props = {};

export const CreateMouseCursor = (props: Props) => {
  const cursor = useAppSelector((state) => state.cursor);
  const dispatch = useAppDispatch();

  const isDown = useRef(false);
  const prevPos = useRef({
    x: 0,
    y: 0,
  });
  const [AreaStyle, setAreaStyle] = useState({
    height: 10,
    width: 10,
    top: 0,
    left: 0,
  });

  const AreaStyleRef = useRef({
    height: 10,
    width: 10,
    top: 0,
    left: 0,
  });

  useEffect(() => {
    if (!cursor.navbarShowCursor) return;

    // 鼠标被按下记录位置
    document.onmousedown = function (event) {
      // 改变store内状态
      dispatch(changeCursorState(true));
      setAreaStyle({
        height: AreaStyle.height,
        width: AreaStyle.width,
        top: event.clientY,
        left: event.clientX,
      });
      AreaStyleRef.current = {
        height: AreaStyleRef.current.height,
        width: AreaStyleRef.current.width,
        top: event.clientY,
        left: event.clientX,
      };
      //save prevpos
      prevPos.current = {
        x: event.clientX,
        y: event.clientY,
      };
      isDown.current = true;
    };

    // 鼠标开始移动
    document.onmousemove = function (event) {
      if (!isDown.current) return;
      const currentX = event.clientX - prevPos.current.x;
      const currentY = event.clientY - prevPos.current.y;
      setAreaStyle({
        height: AreaStyleRef.current.height + currentY,
        width: AreaStyleRef.current.width + currentX,
        top: AreaStyleRef.current.top,
        left: AreaStyleRef.current.left,
      });
      AreaStyleRef.current = {
        height: AreaStyleRef.current.height + currentY,
        width: AreaStyleRef.current.width + currentX,
        top: AreaStyleRef.current.top,
        left: AreaStyleRef.current.left,
      };
      prevPos.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    // 鼠标释放
    document.onmouseup = function () {
      setAreaStyle({
        height: 10,
        width: 10,
        top: 0,
        left: 0,
      });
      AreaStyleRef.current = {
        height: 10,
        width: 10,
        top: 0,
        left: 0,
      };
      isDown.current = false;
      dispatch(changeCursorState(false));
    };
    return () => {
      document.onmouseup = null;
      document.onmousedown = null;
      dispatch(changeCursorState(false));
    };
  }, [cursor.navbarShowCursor]);

  return cursor.value ? (
    <div
      style={{
        position: "absolute",
        height: AreaStyle.height + "px",
        width: AreaStyle.width + "px",
        top: AreaStyle.top + "px",
        left: AreaStyle.left + "px",
        backgroundColor: "#92b2da8b",
        border: "1px solid #056de8",
      }}
    ></div>
  ) : (
    <div></div>
  );
};
