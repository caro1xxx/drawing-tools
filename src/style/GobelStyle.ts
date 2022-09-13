import styled from "styled-components";
export const ZoomLeftyTop = styled.div`
  cursor: nw-resize;
  -webkit-user-drag: none;
  position: absolute;
  height: 20px;
  width: 20px;
  top: -7px;
  left: -7px;
  border: solid 2px #056de8;
  border-right-style: none;
  border-bottom-style: none;
`;
export const ZoomLeftBottom = styled.div`
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
export const ZoomRightTop = styled.div`
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
export const ZoomRightBottom = styled.div`
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

export const Selected = styled.div`
  position: absolute;
  border: 2px #056de8 solid;
  width: 100px;
  height: 100px;
  visibility: hidden;
  padding: 4px 6px 6px 4px;
`;

export const Wapper = styled.div`
  visibility: visible;
  border: 1px #000 dashed;
  width: 100%;
  height: 100%;
`;

export const Contrl = styled.div`
  visibility: inherit;
`;

export const Rotating = styled.div`
  height: 100px;
  width: inherit;
  border-radius: 5px;

  position: absolute;
  top: -80px;
  text-align: center;
  padding-top: 20px;
`;
