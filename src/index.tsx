import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { PlayerApp } from "./PlayerApp";
import { Provider } from "mobx-react";
import { AppStore } from "./store/AppStore";

const store = new AppStore();

/*

root.render(
  <React.StrictMode>
      {/!*<App />*!/}
      <Provider store={store}>
          <PlayerApp />
      </Provider>,
  </React.StrictMode>
);
*/

ReactDOM.render(
  <Provider store={store}>
    <PlayerApp />
  </Provider>,
  document.getElementById("root")
);
