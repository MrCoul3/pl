import React, { useEffect, useState } from "react";
import { PlayerInstance } from "../PlayerInstance";
import style from "./style.module.css";
import { Button } from "@mui/material";
import { PLAYER_STATUSES } from "../../enums/PlayerStatuses";
import { NavigationPanel } from "../NavigationPanel/NavigationPanel";

interface IProps {
  input: string[];
}

export const MainPlayerFrame = (props: IProps) => {
  useEffect(() => {
    console.log(props.input);
  }, [props.input]);

  const [playerStatus, setPlayerStatus] = useState<PLAYER_STATUSES>(
    PLAYER_STATUSES.pause
  );

  function playerAction() {
    if (playerStatus === PLAYER_STATUSES.pause)
      setPlayerStatus(PLAYER_STATUSES.play);
    if (playerStatus === PLAYER_STATUSES.play)
      setPlayerStatus(PLAYER_STATUSES.pause);
  }

  return (
    <>
      <section className={style.mainFrame}>

        <div>
          {props.input.map((input) => (
            <PlayerInstance playerStatus={playerStatus} input={input} />
          ))}
        </div>

        <NavigationPanel status={playerStatus} action={playerAction} />
      </section>
    </>
  );
};
