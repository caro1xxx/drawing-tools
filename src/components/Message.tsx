import React from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../hooks";
type Props = {};
const Wapper = styled.div`
  cursor: default;
  background-color: #056de8;
  padding: 5px;
  color: white;
  border-radius: 25px;
  position: absolute;
  top: 30px;
  left: 40%;
  right: 40%;
  display: flex;
  align-items: center;
  text-align: center;
  animation: tips 0.5s steps(25);
  font-size: 15px;
  @keyframes tips {
    from {
      top: -50px;
    }
    to {
      top: 30px;
    }
  }
`;

export const Message = (props: Props) => {
  const notice = useAppSelector((state) => state.notice.value);

  return (
    <Wapper>
      <svg
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1854"
        width="20"
        height="20"
      >
        <path
          d="M512 54.272q95.232 0 178.688 36.352t145.408 98.304 98.304 145.92 36.352 179.2-36.352 178.688-98.304 145.408-145.408 98.304-178.688 36.352-179.2-36.352-145.92-98.304-98.304-145.408-36.352-178.688 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM567.296 450.56q0-24.576-15.872-41.472t-39.424-16.896-39.936 16.896-16.384 41.472l0 343.04q0 24.576 16.384 39.424t39.936 14.848 39.936-15.36 16.384-39.936zM512 323.584q29.696 0 50.688-20.992t20.992-50.688-20.992-50.688-50.688-20.992-51.2 20.992-21.504 50.688 21.504 50.688 51.2 20.992z"
          p-id="1855"
          fill="#ffffff"
        ></path>
      </svg>
      {notice}
    </Wapper>
  );
};
