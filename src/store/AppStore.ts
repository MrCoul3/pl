import { makeAutoObservable } from "mobx";

export class AppStore {
  currentTimeStamp: number = 0;

  setCurrentTimeStamp(value: number) {
    this.currentTimeStamp = value;
  }

  constructor() {
    makeAutoObservable(this);
  }
}
