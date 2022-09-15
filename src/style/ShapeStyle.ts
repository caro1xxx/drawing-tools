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
  border: 1px #000 solid;
  width: 100%;
  height: 100%;
`;

export const Contrl = styled.div`
  visibility: inherit;
`;

export const CircleWapper = styled.div`
  visibility: visible;
  border: 1px #000 solid;
  width: inherit;
  height: inherit;
  margin-right: 10px;
  border-radius: 100px;
`;

export const TriangularWapper = styled.div`
  visibility: visible;
  /* border: 1px #000 dashed; */
  width: inherit;
  height: inherit;
  margin-right: 10px;
`;

export const TriangularLeftEdge = styled.hr`
  background-color: black;
  position: absolute;
  height: 100px;
  left: 29px;
  bottom: -2px;
  width: 1px;
  transform: rotate(30deg);
`;

export const TriangularRightEdge = styled.hr`
  background-color: black;
  position: absolute;
  height: 100px;
  right: 29px;
  bottom: -2px;
  width: 1px;
  transform: rotate(-30deg);
`;

export const TriangulaBottomEdge = styled.hr`
  background-color: black;
  position: absolute;
  height: 100px;
  bottom: -45px;
  width: 1px;
  left: 54px;

  transform: rotate(90deg);
`;

export const LineWapper = styled.div`
  visibility: visible;
  /* background-color: black; */
  height: 100%;
  width: 100%;
  border-bottom: 2px #000 solid;
`;

export const LineSelected = styled.div`
  position: absolute;
  border: 2px #056de8 solid;
  width: 100px;
  height: 5px;
  visibility: hidden;
  padding: 4px 6px 6px 4px;
`;

export const Text = styled.textarea`
  visibility: visible;
  border: none;
  outline: none;
  width: inherit;
  height: inherit;
  margin-right: 10px;
  /* background-color: rgba(255, 255, 255, 0); */
`;
