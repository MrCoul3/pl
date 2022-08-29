import React, { useEffect } from "react";

interface IProps {
  input: any;
}

export const MainPlayerFrame = (props: IProps) => {
  useEffect(() => {
    console.log(props.input);
  }, [props.input]);

  return (
    <div
      id="mainPlayerFrame"
      style={{ width: "600px", height: "350px", background: "#a1a1a1" }}
    >
      {props.input.map((instance: any) => <div>{instance.url}</div>)}
    </div>
  );
};
