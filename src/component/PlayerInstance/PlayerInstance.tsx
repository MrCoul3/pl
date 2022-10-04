import React, {
  Ref,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { EnumPlayerStates } from "../../enums/Enums";
import style from "./style.module.css";
import { IRecordData } from "../../interfaces/IRecordData";
import { URI } from "../../config/config";
import { useStore } from "../../hooks/useStore";

interface IInput {
  record: IRecordData;
  playerState: string;
}
export const PlayerInstance = (props: IInput) => {
  const store = useStore();

  const currentVideo = useRef<HTMLVideoElement | null>(null);

  const [currentTime, setCurrentTime] = useState<number | undefined>(0);

  function actions() {
    if (props.playerState === EnumPlayerStates.play) {
      (currentVideo.current as HTMLVideoElement).play();
    }
    if (props.playerState === EnumPlayerStates.pause) {
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
    (currentVideo.current as HTMLVideoElement). addEventListener(
      "timeupdate",
      videoElementListener
    );
    return () => {
      (currentVideo.current as HTMLVideoElement).removeEventListener(
        "timeupdate",
        videoElementListener
      );
    };
  }, [props.playerState]);

  return (
    <>
      <span className={style.timestamp}>{currentTime}</span>
      <video
        className={"video"}
        // style={{objectFit: "cover"}}
        ref={currentVideo}
        style={{width: "100%"}}
        src={URI + props.record.name}
      />
    </>
  );
};
