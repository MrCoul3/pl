import { observer } from "mobx-react";
import style from "./style.module.css";
import { EnumPlayerStates, EnumScaleConstants } from "../../enums/Enums";
import { Button } from "@mui/material";
import React, {
  ChangeEvent,
  useEffect,
  useState,
  WheelEventHandler,
} from "react";
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
    console.log(target.value);
    // TODO: привязать движение слайдера к времени роликов (двигая слайдер - изменять время роликов)
    console.debug(
      "currentTimeStamp",
      moment(store.currentTimeStamp).format("HH:mm:ss DD.MM"),
      store.currentTimeStamp
    );
    store.setCurrentTimeStamp(+target.value);
  }

  const [scaleValue, setScaleValue] = useState(150000);

  const onChangeScale = (e: React.WheelEvent<HTMLInputElement>) => {
    const direction = Math.sign(e.deltaY);
    if (scaleValue === EnumScaleConstants.minutes) {
      if (direction === 1) {
        setScaleValue(EnumScaleConstants.hours);
      }
    }
    if (scaleValue === EnumScaleConstants.hours) {
      if (direction === 1) {
        setScaleValue(EnumScaleConstants.days);
      }
      if (direction === -1) {
        setScaleValue(EnumScaleConstants.minutes);
      }
    }
    if (scaleValue === EnumScaleConstants.days) {
      if (direction === 1) {
        setScaleValue(EnumScaleConstants.months);
      }
      if (direction === -1) {
        setScaleValue(EnumScaleConstants.hours);
      }
    }
    if (scaleValue === EnumScaleConstants.months) {
      if (direction === -1) {
        setScaleValue(EnumScaleConstants.days);
      }
    }
  };

  const [sliderPos, setSliderPos] = useState<string>();

  function calcSliderPos(e: any) {
    return (
      (e.clientX / e.target.clientWidth) *
      parseInt(e.target.getAttribute("max"), 10)
    );
  }
  function onMouseMove(e: React.MouseEvent<HTMLInputElement>) {
    // setSliderPos( calcSliderPos(e).toFixed(0));
  }
  useEffect(() => {
    console.debug("scaleValues: ", scaleValue);
  }, [setScaleValue, sliderPos]);

  return (
    <>
      <div className={style.navigationPanel}>
        <div className={style.timeRanger}>
          {/* <div className={style.scaleLine}>
            <div className={style.scaleSerif}></div>
            <div className={style.scaleSerif}></div>
            <div className={style.scaleLineCenter}></div>
            <div className={style.scaleSerif}></div>
            <div className={style.scaleSerif}></div>
          </div>*/}
          <input
            onMouseMove={onMouseMove}
            onWheel={onChangeScale}
            value={store.currentTimeStamp}
            onChange={(e) => onHandleChange(e)}
            className={style.timeRangerInput}
            id="timeRanger"
            min={store.currentTimeStamp - scaleValue}
            max={store.currentTimeStamp + scaleValue}
            step="1000"
            type="range"
          />
          <div className={style.timeScale}>
            <div className={style.timelineValue}>
              <span>{moment(store.currentTimeStamp - scaleValue ).format("HH:mm:ss")}</span>
              <span>{moment(store.currentTimeStamp - scaleValue).format("DD.MM.YYYY")}</span>
            </div>
            <div className={style.timelineValue}>
              <span>{moment(store.currentTimeStamp - scaleValue / 2).format("HH:mm:ss")}</span>
            </div>

            <div className={style.timelineValue}>
              <span>{moment(store.currentTimeStamp).format("HH:mm:ss")}</span>
              <span>{moment(store.currentTimeStamp).format("DD.MM.YYYY")}</span>
            </div>

            <span>
              {moment(store.currentTimeStamp + scaleValue / 2).format(
                "HH:mm:ss"
              )}
            </span>
            <div className={style.timelineValue}>
              <span>{moment(store.currentTimeStamp + scaleValue).format("HH:mm:ss")}</span>
              <span>{moment(store.currentTimeStamp + scaleValue).format("DD.MM.YYYY")}</span>
            </div>
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
