import React, { useEffect } from "react";
import style from "./style.module.css";
import { EnumHotKeys, EnumPlayerStates } from "../../enums/Enums";
import { NavigationPanel } from "../NavigationPanel/NavigationPanel";
import { VideoFramesComponent } from "../VideoFramesComponent/VideoFramesComponent";
import { IRecordData } from "../../interfaces/IRecordData";
import { useStore } from "../../hooks/useStore";
import {observer} from "mobx-react";

interface IProps {
  input: IRecordData[];
}

export const Player = observer((props: IProps) => {
  const store = useStore();

  function playerAction() {
    if (store.playerState === EnumPlayerStates.pause) {
      store.setPlayerState(EnumPlayerStates.play);
      return;
    }
    if (store.playerState === EnumPlayerStates.play) {
      store.setPlayerState(EnumPlayerStates.pause);
      return;
    }
  }

  function hotkeys(e: KeyboardEvent) {
    console.debug(e.code);
    if (e.code === EnumHotKeys.space) {
      playerAction();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", hotkeys);
    return () => {
      window.removeEventListener("keydown", hotkeys);
    };
  }, []);

  return (
    <>
      <section className={style.playerFrame}>
        <VideoFramesComponent playerState={store.playerState} inputs={props.input} />
        <NavigationPanel playerState={store.playerState} action={playerAction} />
      </section>
    </>
  );
});
