import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { PlayerInstance } from "../PlayerInstance/PlayerInstance";
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

  function setGridStyle() {
    if (props.input.length > 4 && props.input.length <= 9) {
      return {gridTemplateColumns: "repeat(3, 1fr)"}
    }
  }
//  TODO: вынести в отдельный компонент   videoFrames

  return (
    <>
      <section className={style.playerFrame}>
        <div style={setGridStyle()} className={style.videoFrames}>
          {props.input.map((input) => (
            <PlayerInstance
              playerStatus={playerStatus}
              input={input}
            />
          ))}
        </div>

        <NavigationPanel status={playerStatus} action={playerAction} />
      </section>
    </>
  );
};
