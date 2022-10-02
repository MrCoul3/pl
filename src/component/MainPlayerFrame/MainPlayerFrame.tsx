import React, { useState } from "react";
import style from "./style.module.css";
import { PLAYER_STATUSES } from "../../enums/PlayerStatuses";
import { NavigationPanel } from "../NavigationPanel/NavigationPanel";
import { VideoFramesComponent } from "../VideoFramesComponent/VideoFramesComponent";
import {IRecordData} from "../../interfaces/IRecordData";

interface IProps {
  input: IRecordData[];
}

export const MainPlayerFrame = (props: IProps) => {
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
      <section className={style.playerFrame}>
        <VideoFramesComponent status={playerStatus} inputs={props.input} />
        <NavigationPanel status={playerStatus} action={playerAction} />
      </section>
    </>
  );
};
