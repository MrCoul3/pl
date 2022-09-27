import React, { Ref, useEffect, useRef } from "react";
import { PLAYER_STATUSES } from "../enums/PlayerStatuses";

interface IInput {
  input: string;
  playerStatus: string;
}
export const PlayerInstance = (props: IInput) => {
  const currentVideo = useRef(null);

  function actions() {
    if (props.playerStatus === PLAYER_STATUSES.play) {
      videoElement()?.play();
    }
    if (props.playerStatus === PLAYER_STATUSES.pause) {
      videoElement()?.pause();
    }
  }

  useEffect(() => {
    actions();
  }, [props.playerStatus]);

  function videoElement() {
    if (currentVideo.current !== null) {
      const current = currentVideo.current as HTMLVideoElement;
      return current;
    }
  }

  return <video ref={currentVideo} width="400px" src={props.input} />;
};
