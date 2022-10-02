import { observer } from "mobx-react";
import style from "./style.module.css";
import { PLAYER_STATUSES } from "../../enums/PlayerStatuses";
import { Button } from "@mui/material";
import React, { ChangeEvent } from "react";
import { useStore } from "../../hooks/useStore";
import "rc-slider/assets/index.css";
import moment from "moment/moment";

interface INavPanel {
  status: PLAYER_STATUSES;
  action(): void;
}

export const NavigationPanel = observer((props: INavPanel) => {
  const store = useStore();

  function onHandleChange(e: ChangeEvent<HTMLInputElement>) {
    const target = e.currentTarget;
    // TODO: привязать движение слайдера к времени роликов (двигая слайдер - изменять время роликов)
    console.debug("currentTimeStamp", moment(store.currentTimeStamp).format("HH:mm:ss DD.MM"), store.currentTimeStamp);
    store.setCurrentTimeStamp(+target.value);
  }

  return (
    <>
      <div className={style.navigationPanel}>
        <div className={style.timeRanger}>
          <input
              value={store.currentTimeStamp}
            onChange={(e) => onHandleChange(e)}
            className={style.timeRangerInput}
            id="timeRanger"
            min="1664571600000" // 01.10 00:00
            max="1664658000000" // 02.10 00:00
            step="1000"
            type="range"
          />
          <div className={style.timeScale}>
            <span>12:00</span>
            <div>{moment(store.currentTimeStamp).format("HH:mm:ss")}</div>
            <span>12:00</span>
          </div>
        </div>

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
