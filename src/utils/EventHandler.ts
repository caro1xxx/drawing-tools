import React from "react";

export const drag = (
  type: string,
  element: React.RefObject<HTMLDivElement> | null,
  event:
    | React.MouseEvent<HTMLDivElement, MouseEvent>
    | React.MouseEvent<HTMLTextAreaElement, MouseEvent>,
  isDown: React.MutableRefObject<boolean>,
  Pos: React.MutableRefObject<{
    top: number;
    left: number;
    cX: number;
    cY: number;
  }>,
  setGlobeStyle: React.Dispatch<
    React.SetStateAction<{
      height: number;
      width: number;
      top: number;
      left: number;
    }>
  >,
  GlobeStyle: {
    height: number;
    width: number;
    top: number;
    left: number;
  }
) => {
  switch (type) {
    case "down":
      event.stopPropagation();
      (element as any).current.style.visibility = "visible";
      isDown.current = true;
      if (element?.current?.style.visibility === "visible") {
        const elementStyle = element?.current;
        const top = elementStyle?.offsetTop;
        const left = elementStyle?.offsetLeft;
        const cY = event.clientY;
        const cX = event.clientX;
        Pos.current = { top, left, cX, cY };
      }
      break;
    case "move":
      event.stopPropagation();
      if (!isDown.current) return;
      const tops = Pos.current.top + (event.clientY - Pos.current.cY);
      const lefts = Pos.current.left + (event.clientX - Pos.current.cX);
      setGlobeStyle({
        height: GlobeStyle.height,
        width: GlobeStyle.width,
        left: lefts,
        top: tops,
      });
      break;
    case "up":
      event.stopPropagation();
      isDown.current = false;
      break;
    case "leave":
      event.stopPropagation();
      isDown.current = false;
      (element as any).current.style.visibility = "hidden";
      break;
  }
};

export const zoom = (
  direction: string,
  type: string,
  element: React.RefObject<HTMLDivElement> | null,
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  isDown: React.MutableRefObject<boolean>,
  Pos: React.MutableRefObject<{
    top: number;
    left: number;
    cX: number;
    cY: number;
  }>,
  setGlobeStyle: React.Dispatch<
    React.SetStateAction<{
      height: number;
      width: number;
      top: number;
      left: number;
    }>
  >,
  GlobeStyle: {
    height: number;
    width: number;
    top: number;
    left: number;
  }
) => {
  switch (type) {
    case "down":
      event.stopPropagation();
      isDown.current = true;
      if (element?.current?.style.visibility === "visible") {
        // 保存坐标
        const elementStyle = element?.current;
        const top = elementStyle?.offsetTop;
        const left = elementStyle?.offsetLeft;
        const cY = event.clientY;
        const cX = event.clientX;
        Pos.current = { top, left, cX, cY };
      }
      break;
    case "move":
      event.stopPropagation();
      if (!isDown.current) return;
      switch (direction) {
        case "LeftTop":
          {
            const offsetX = event.clientX - Pos.current.cX;
            const offsetY = event.clientY - Pos.current.cY;
            setGlobeStyle({
              height: GlobeStyle.height - offsetY,
              top: GlobeStyle.top + offsetY,
              width: GlobeStyle.width - offsetX,
              left: GlobeStyle.left + offsetX,
            });
            // 再次保存坐标
            if (element?.current?.style.visibility === "visible") {
              const elementStyle = element?.current;
              const top = elementStyle?.offsetTop;
              const left = elementStyle?.offsetLeft;
              const cY = event.clientY;
              const cX = event.clientX;
              Pos.current = { top, left, cX, cY };
            }
          }
          break;
        case "LeftBottom":
          {
            const offsetX = event.clientX - Pos.current.cX;
            const offsetY = event.clientY - Pos.current.cY;
            setGlobeStyle({
              height: GlobeStyle.height + offsetY,
              top: GlobeStyle.top,
              width: GlobeStyle.width - offsetX,
              left: GlobeStyle.left + offsetX,
            });
            // 再次保存坐标
            if (element?.current?.style.visibility === "visible") {
              const elementStyle = element?.current;
              const top = elementStyle?.offsetTop;
              const left = elementStyle?.offsetLeft;
              const cY = event.clientY;
              const cX = event.clientX;
              Pos.current = { top, left, cX, cY };
            }
          }
          break;
        case "RightTop":
          {
            const offsetX = event.clientX - Pos.current.cX;
            const offsetY = event.clientY - Pos.current.cY;
            setGlobeStyle({
              height: GlobeStyle.height - offsetY,
              top: GlobeStyle.top + offsetY,
              width: GlobeStyle.width + offsetX,
              left: GlobeStyle.left,
            });
            // 再次保存坐标
            if (element?.current?.style.visibility === "visible") {
              const elementStyle = element?.current;
              const top = elementStyle?.offsetTop;
              const left = elementStyle?.offsetLeft;
              const cY = event.clientY;
              const cX = event.clientX;
              Pos.current = { top, left, cX, cY };
            }
          }
          break;
        case "RightBottom":
          {
            const offsetX = event.clientX - Pos.current.cX;
            const offsetY = event.clientY - Pos.current.cY;
            setGlobeStyle({
              height: GlobeStyle.height + offsetY,
              top: GlobeStyle.top,
              width: GlobeStyle.width + offsetX,
              left: GlobeStyle.left,
            });
            // 再次保存坐标
            if (element?.current?.style.visibility === "visible") {
              const elementStyle = element?.current;
              const top = elementStyle?.offsetTop;
              const left = elementStyle?.offsetLeft;
              const cY = event.clientY;
              const cX = event.clientX;
              Pos.current = { top, left, cX, cY };
            }
          }
          break;
      }
      break;
    case "up":
      event.stopPropagation();
      isDown.current = false;
      break;
    case "leave":
      break;
  }
};
