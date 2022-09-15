export const getCurrentPos = (event: MouseEvent) => {
  return Promise.resolve({ x: event.clientX, y: event.clientY });
};

export const currentPosDiminishPrevPos = (
  current: { x: number; y: number },
  prev: { x: number; y: number }
) => {
  const currentX = current.x - prev.x;
  const currentY = current.y - prev.y;
  return Promise.resolve({ x: currentX, y: currentY });
};

interface Item {
  type: string;
  id: string;
  height: number;
  width: number;
  pos: Array<Array<number>> | null;
}

export const CalculateShapeWithinSelection = (
  itemStore: Item[],
  selectionPos: React.MutableRefObject<{
    x: number;
    y: number;
  }>,
  AreaStyleRef: React.MutableRefObject<{
    height: number;
    width: number;
    top: number;
    left: number;
  }>
) => {
  const basePos = { ...AreaStyleRef.current };
  const seletionPos = { ...selectionPos.current };
  const pos: Array<Array<number>> | null = [];
  const selectedShapeStoreId: Array<string> | null = [];
  //左上,左下,右上,右下
  pos.push(
    [basePos.left, basePos.top],
    [basePos.left, basePos.top + basePos.height],
    [basePos.left + basePos.width, basePos.top],
    [seletionPos.x, seletionPos.y]
  );
  itemStore.map((item, index) => {
    if (item.pos === null) return;
    if (
      item.pos[0][0] >= pos[0][0] &&
      item.pos[0][1] >= pos[0][1] &&
      item.pos[3][0] <= pos[3][0] &&
      item.pos[3][1] <= pos[3][1]
    ) {
      selectedShapeStoreId.push(item.id);
    }
  });
  return selectedShapeStoreId;
};
