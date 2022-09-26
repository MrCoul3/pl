import React, { useEffect } from "react";
import { PlayerInstance } from "../PlayerInstance";
import style from "./style.module.css";
interface IProps {
  input: string[];
}

export const MainPlayerFrame = (props: IProps) => {
  useEffect(() => {
    console.log(props.input);
  }, [props.input]);

  return (
    <>

      <section className={style.mainFrame}>
        {props.input.map((input) => (
            <PlayerInstance input={input} />
        ))}
      </section>
    </>
  );
};
