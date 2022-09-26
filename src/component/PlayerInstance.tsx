import React, { Ref, useRef } from "react";

interface IInput {
  input: string;
  currentVideo: Ref<HTMLVideoElement>;
}
export const PlayerInstance = (props: IInput) => {
  return (
    <video
      ref={props.currentVideo}
      autoPlay
      width="400px"
      src={props.input}
    />
  );
};
