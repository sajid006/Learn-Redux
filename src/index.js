import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import devToolsEnhancer from 'remote-redux-devtools';
import App from './App';
import './index.css';
import counter from './reducers/counter';
import isLogged from './reducers/isLogged';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));

//STORE -> GLOBALIZED STATE
//STORE
const myStore = configureStore({ reducer: {
  counter: counter,
  isLogged: isLogged
}, devTools:[ devToolsEnhancer({ realtime: true }) ], })


root.render(
  <React.StrictMode>
  <Provider store={myStore}>
    <App />
  </Provider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
