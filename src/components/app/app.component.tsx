import * as React from 'react';
import './app.css';
import {Counter} from "../counter";
import {Time} from "../time/time";
import {AppState} from "state";
import {ActionHandler} from "../../actions";

const logo = require('./logo.svg');

interface Props extends AppState, ActionHandler {}

export const App = (props: Props) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit this <code>src/App.tsx</code> and save to reload.
    </p>
    <Counter {...props.counter} dispatch={props.dispatch}/>
    <Time {...props.time} dispatch={props.dispatch} />
  </div>);