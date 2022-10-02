import { makeAutoObservable } from "mobx";
import moment from "moment/moment";

export class AppStore {
  currentTimeStamp: number = 1664575260000;

  setCurrentTimeStamp(value: number) {
    this.currentTimeStamp = value;
  }

  constructor() {
    console.log(moment(this.currentTimeStamp).format("HH:mm:ss"))
    makeAutoObservable(this);
  }
}
