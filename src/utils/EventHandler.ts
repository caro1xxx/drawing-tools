export const drag = (
type:string,
element:React.RefObject<HTMLDivElement> | null,
event: React.MouseEvent<HTMLDivElement, MouseEvent>,
isDown:React.MutableRefObject<boolean>,
Pos:React.MutableRefObject<{
  top: number;
  left: number;
  cX: number;
  cY: number;}>,
setGlobeStyle:React.Dispatch<React.SetStateAction<{
  height: number;
  width: number;
  top: number;
  left: number;
  right: number;
  bottom: number;
}>>,
GlobeStyle:{
  height: number;
  width: number;
  top: number;
  left: number;
  right: number;
  bottom: number;
}
) => {
  switch(type){
    case 'down':
      (element as any).current.style.visibility = 'visible'
      isDown.current  = true;
      event.stopPropagation();
      if (element?.current?.style.visibility === 'visible'){
        const elementStyle = element?.current
        const top = elementStyle?.offsetTop;
        const left = elementStyle?.offsetLeft;
        const cY = event.clientY;
        const cX = event.clientX;
        Pos.current = {top, left, cX, cY}
      }
      break;
    case 'rotate':
      break
    case 'move':
      event.stopPropagation()
      if(!isDown.current) return;
      const tops = Pos.current.top + (event.clientY - Pos.current.cY)
      const lefts = Pos.current.left + (event.clientX - Pos.current.cX)
      setGlobeStyle({
        height: GlobeStyle.height,
        width: GlobeStyle.width,
        left: lefts,
        top: tops,
        right: GlobeStyle.right,
        bottom: GlobeStyle.bottom,
      })
      break;
    case 'up':
      event.stopPropagation();
      isDown.current = false;
      break
    case 'leave':
      event.stopPropagation();
      isDown.current = false;
      (element as any).current.style.visibility = 'hidden'
      break
  }
}

