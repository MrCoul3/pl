import { observer } from "mobx-react";
import style from "../Player/style.module.css";
import { PlayerInstance } from "../PlayerInstance/PlayerInstance";
import React from "react";
import { EnumPlayerStates } from "../../enums/Enums";
import { IRecordData } from "../../interfaces/IRecordData";
interface IProps {
  inputs: IRecordData[];
  playerState: EnumPlayerStates;
}
export const VideoFramesComponent = observer((props: IProps) => {
  function setGridStyle() {
    if (props.inputs.length > 4 && props.inputs.length <= 9) {
      return { gridTemplateColumns: "repeat(3, 1fr)" };
    }
    if (props.inputs.length === 1) {
      return { gridTemplateColumns: "repeat(1, 1fr)" };
    }
  }
  return (
    <div style={setGridStyle()} className={style.videoFrames}>
      {props.inputs.map((input) => (
        <PlayerInstance
          key={input.id}
          record={input}
          playerState={props.playerState}
        />
      ))}
    </div>
  );
});
