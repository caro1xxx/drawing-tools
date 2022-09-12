export const contrlPointDown = (
type:string,
element:React.RefObject<HTMLDivElement> | null,
event: React.MouseEvent<HTMLDivElement, MouseEvent>,
isDown:React.MutableRefObject<boolean>,
Pos:React.MutableRefObject<{
  top: number;
  left: number;
  cX: number;
  cY: number;}>
) => {
  if (element?.current?.style.visibility === 'visible') {
    switch(type){
      case 'down':
        isDown.current  = true;
        event.stopPropagation();
        const elementStyle = element?.current
        const top = elementStyle?.offsetTop;
        const left = elementStyle?.offsetLeft;
        const cY = event.clientY; // clientX 相对于可视化区域
        const cX = event.clientX;
        Pos.current = {top, left, cX, cY}
        break;
      case 'rotate':
        break
      case 'move':
        event.stopPropagation()
        if(!isDown.current) return;
        const tops = Pos.current.top + (event.clientY - Pos.current.cY)
        const lefts = Pos.current.left + (event.clientX - Pos.current.cX)
        if(element.current !== null && element !== null){
          element.current.style.top = tops+'px'
          element.current.style.left = lefts+'px'
        }
        break;
      case 'up':
        event.stopPropagation()
        isDown.current = false
        break
      case 'leave':
        event.stopPropagation()
        isDown.current = false
        element.current.style.visibility = 'hidden'
        break
    }
  }else{
    (element as any).current.style.visibility = 'visible'
  }
}


export const zoom = (
type:string,
element:React.RefObject<HTMLDivElement> | null,
event: React.MouseEvent<HTMLDivElement, MouseEvent>,
isZoomDown:React.MutableRefObject<boolean>,
Pos:React.MutableRefObject<{
  top: number;
  left: number;
  cX: number;
  cY: number;}>,
setStateMethod:React.Dispatch<React.SetStateAction<{
  height: number;
  width: number;
  left:number,
  top:number
}>>,
get:{
  height: number;
  width: number;
  left:number,
  top:number
}
) => {
  const offsetX = event.clientX - Pos.current.cX;
  const offsetY = event.clientY - Pos.current.cY;
  if (element?.current?.style.visibility === 'visible') {
    switch(type){
      case 'down':
        // 阻止事件冒泡
        event.stopPropagation();
        isZoomDown.current = true;
        // 然后鼠标坐标是
        const elementStyle = element?.current
        const top = elementStyle?.offsetTop;
        const left = elementStyle?.offsetLeft;
        const cY = event.clientY; // clientX 相对于可视化区域
        const cX = event.clientX;
        Pos.current={
          top:top,left:left,cY:cY,cX:cX
        }
        break;
      case 'LeftyTop':
        if(!isZoomDown.current) return 
        // 向右拖拽添加宽度
        console.log(get);
        setStateMethod({
          height:get.height+offsetX,
          width:get.height+offsetY,
          left:get.height-offsetX,
          top:get.top,
        })
        break;
      case 'up':
        event.stopPropagation()
        isZoomDown.current = false
        break
      // case 'leave':
      //   event.stopPropagation()
      //   isZoomDown.current = false
      //   element.current.style.visibility = 'hidden'
      //   break
    }
  }else{
    (element as any).current.style.visibility = 'visible'
  }
}

