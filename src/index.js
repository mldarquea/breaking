import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserHistory } from 'history';
import { CookiesProvider } from "react-cookie";
import reportWebVitals from './reportWebVitals';

const history = createBrowserHistory();
let root = document.getElementById('root');

const path = (/#!(\/.*)$/.exec(window.location.hash) || [])[1];

if (path) {
  history.replace(path);
}

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
