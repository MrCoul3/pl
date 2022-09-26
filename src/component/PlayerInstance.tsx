import React from "react";

interface IInput {
  input: string;
}
export const PlayerInstance = (props: IInput) => {
  return <video controls width="400px" src={props.input}></video>;
};
