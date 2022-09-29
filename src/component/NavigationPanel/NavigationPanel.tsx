import { observer } from "mobx-react";
import style from "./style.module.css";
import { PLAYER_STATUSES } from "../../enums/PlayerStatuses";
import { Button } from "@mui/material";
import React, { ChangeEvent } from "react";
import { useStore } from "../../hooks/useStore";

interface INavPanel {
  status: PLAYER_STATUSES;
  action(): void;
}

export const NavigationPanel = observer((props: INavPanel) => {
  const store = useStore();
  function onHandleChange(e: ChangeEvent<HTMLInputElement>) {
    const target = e.currentTarget;
    // TODO: привязать движение слайдера к времени роликов (двигая слайдер - изменять время роликов)
      console.debug('store.currentTimeStamp', store.currentTimeStamp)
    store.setCurrentTimeStamp(+target.value)
  }

  return (
    <>
      <div className={style.navigationPanel}>
        <input
          onChange={(e) => onHandleChange(e)}
          min="0"
          max="300000"
          type="range"
        />
        <div className={style.flexContainer}>
          <Button onClick={props.action}>
            {props.status === PLAYER_STATUSES.pause ? "Play" : "Pause"}
          </Button>
          <div></div>
        </div>
      </div>
    </>
  );
});
