import React, {
  Ref,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { PLAYER_STATUSES } from "../../enums/PlayerStatuses";
import style from "./style.module.css";
import { IRecordData } from "../../interfaces/IRecordData";
import { URI } from "../../config/config";
import { useStore } from "../../hooks/useStore";

interface IInput {
  record: IRecordData;
  playerStatus: string;
}
export const PlayerInstance = (props: IInput) => {
  const store = useStore();

  const currentVideo = useRef<HTMLVideoElement | null>(null);

  const [currentTime, setCurrentTime] = useState<number | undefined>(0);

  function actions() {
    if (props.playerStatus === PLAYER_STATUSES.play) {
      (currentVideo.current as HTMLVideoElement).play();
    }
    if (props.playerStatus === PLAYER_STATUSES.pause) {
      (currentVideo.current as HTMLVideoElement).pause();
    }
  }

  useEffect(() => {
    if (currentVideo) {
      (currentVideo.current as HTMLVideoElement).currentTime =
        (store.currentTimeStamp - props.record.startTime) / 1000;
      setCurrentTime((currentVideo.current as HTMLVideoElement).currentTime);
    }
  }, []);

  useEffect(() => {
    function videoElementListener() {
      setCurrentTime((currentVideo.current as HTMLVideoElement).currentTime);
    }
    actions();
    (currentVideo.current as HTMLVideoElement).addEventListener(
      "timeupdate",
      videoElementListener
    );
    return () => {
      (currentVideo.current as HTMLVideoElement).removeEventListener(
        "timeupdate",
        videoElementListener
      );
    };
  }, [props.playerStatus]);

  return (
    <div className={style.instanceWrap}>
      <span className={style.timestamp}>{currentTime}</span>
      <video
        className={"video"}
        ref={currentVideo}
        width="100%"
        src={URI + props.record.name}
      />
    </div>
  );
};
