import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TodoLayer } from './Context/TodoContext';
import reducer, { initialState } from './Context/reducer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <TodoLayer initialState={initialState} reducer={reducer} >
      <App />
    </TodoLayer>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
