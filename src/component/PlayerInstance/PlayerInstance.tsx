import React, { Ref, useEffect, useRef, useState } from "react";
import { PLAYER_STATUSES } from "../../enums/PlayerStatuses";
import style from "./style.module.css";

interface IInput {
  input: string;
  playerStatus: string;
}
export const PlayerInstance = (props: IInput) => {
  const currentVideo = useRef(null);

  const [currentTime, setCurrentTime] = useState<number | undefined>(0);

  const videoElement = () => {
    if (currentVideo.current) {
      const current = currentVideo.current as HTMLVideoElement;
      return current;
    }
  };

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
    const durationInMills = videoElement()?.duration;
    if (durationInMills) console.log(durationInMills * 1000);
  }, [props.playerStatus]);

  useEffect(() => {
    function videoElementListener() {
      setCurrentTime(videoElement()?.currentTime);
    }
    videoElement()?.addEventListener("timeupdate", videoElementListener);
    return () => {
      videoElement()?.removeEventListener("timeupdate", videoElementListener);
    };
  }, []);

  return (
    <div className={style.instanceWrap}>
      <span className={style.timestamp}>{currentTime}</span>
      <video ref={currentVideo} width="100%" src={props.input} />
    </div>
  );
};
