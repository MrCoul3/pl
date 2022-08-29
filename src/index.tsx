import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {PlayerApp} from "./PlayerApp";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*<App />*/}
      <PlayerApp />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
