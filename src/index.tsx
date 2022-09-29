import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {PlayerApp} from "./PlayerApp";
import { Provider } from "mobx-react";
import {AppStore} from "./store/AppStore";

const container = document.getElementById('root')!;
const root = createRoot(container);
const store = new AppStore();


root.render(
  <React.StrictMode>
      {/*<App />*/}
      <Provider store={store}>
          <PlayerApp />
      </Provider>,
  </React.StrictMode>
);


reportWebVitals();
