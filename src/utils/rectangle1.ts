import { fabric } from "fabric";

export const Rectangle = (height:number = 100,width:number=100,canvsEl: fabric.Canvas) => {
  
  // 创建一个长方形
  const Rectangle = new fabric.Rect({
    top: 30,
    left: 30,
    width: width,
    height: height,
    fill: "white",
  });

  canvsEl.add(Rectangle);
}