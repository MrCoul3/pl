import { MobXProviderContext } from "mobx-react";
import { useContext } from "react";
import { AppStore } from "../store/AppStore";

export const useStore = () => {
  const ctx = useContext(MobXProviderContext);
  const store = ctx.store as AppStore;
  return store;
};
