import React, { useEffect, useRef } from "react";
import { PlayerInstance } from "../PlayerInstance";
import style from "./style.module.css";
import { Button } from "@mui/material";
interface IProps {
  input: string[];
}

export const MainPlayerFrame = (props: IProps) => {
  useEffect(() => {
    console.log(props.input);
  }, [props.input]);

  const currentVideo = useRef(null);

  return (
    <>
      <section className={style.mainFrame}>
        {props.input.map((input) => (
          <PlayerInstance currentVideo={currentVideo} input={input} />
        ))}
        <Button>Play</Button>
      </section>
    </>
  );
};
