import { observer } from "mobx-react";
import style from "./style.module.css";
import { EnumPlayerStates } from "../../enums/Enums";
import { Button } from "@mui/material";
import React, {ChangeEvent, useEffect, useState} from "react";
import { useStore } from "../../hooks/useStore";
import "rc-slider/assets/index.css";
import moment from "moment/moment";

interface INavPanel {
  playerState: EnumPlayerStates;
  action(): void;
}

interface IScaleValues {
  minValue: number;
  maxValue: number;
}

export const NavigationPanel = observer((props: INavPanel) => {
  const store = useStore();

  function onHandleChange(e: ChangeEvent<HTMLInputElement>) {
    const target = e.currentTarget;
    // TODO: привязать движение слайдера к времени роликов (двигая слайдер - изменять время роликов)
    console.debug(
      "currentTimeStamp",
      moment(store.currentTimeStamp).format("HH:mm:ss DD.MM"),
      store.currentTimeStamp
    );
    store.setCurrentTimeStamp(+target.value);
    // setScaleValues()
  }

  const initScaleValues: IScaleValues = {
    minValue: store.currentTimeStamp - 150000,
    maxValue: store.currentTimeStamp + 150000,
  };

  const [scaleValues, setScaleValues] = useState<IScaleValues>(initScaleValues);

  function onChangeScale(e: Event) {
    console.log(e)
  }

  useEffect(() => {
    window.addEventListener('scroll', (e) => onChangeScale(e))

  }, []);


  return (
    <>
      <div className={style.navigationPanel}>
        <div className={style.timeRanger}>
          <input
            value={store.currentTimeStamp}
            onChange={(e) => onHandleChange(e)}
            className={style.timeRangerInput}
            id="timeRanger"
            min={scaleValues.minValue}
            max={scaleValues.maxValue}
            step="1000"
            type="range"
          />
          <div className={style.timeScale}>
            <span>
              {moment(store.currentTimeStamp - 150000).format("HH:mm:ss")}
            </span>
            <div>{moment(store.currentTimeStamp).format("HH:mm:ss")}</div>
            <span>
              {moment(store.currentTimeStamp + 150000).format("HH:mm:ss")}
            </span>
          </div>
        </div>

        <div className={style.flexContainer}>
          <Button onClick={props.action}>
            {props.playerState === EnumPlayerStates.pause ? "Play" : "Pause"}
          </Button>
          <div></div>
        </div>
      </div>
    </>
  );
});
