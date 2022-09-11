import React, { useEffect, useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { fabric } from "fabric";
import { Rectangle } from "../utils/Rectangle";

type Props = {};

export const Index = (props: Props) => {
  const current = useAppSelector((state) => state.current.value);

  return (
    <div>
      {current.map((item, index) => {
        return <Rectangle key={item.id}></Rectangle>;
      })}
    </div>
  );
};
