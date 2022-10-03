import { makeAutoObservable } from "mobx";
import moment from "moment/moment";
import { EnumPlayerStates } from "../enums/Enums";

export class AppStore {
  currentTimeStamp: number = 1664575260000;
  playerState: EnumPlayerStates = EnumPlayerStates.pause;

  setCurrentTimeStamp(value: number) {
    this.currentTimeStamp = value;
  }

  setPlayerState(value: EnumPlayerStates) {
    this.playerState = value;
    console.log(this.playerState)
  }

  constructor() {
    console.log(moment(this.currentTimeStamp).format("HH:mm:ss"));
    makeAutoObservable(this);
  }
}
