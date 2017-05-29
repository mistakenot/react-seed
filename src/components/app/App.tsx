import * as React from 'react';
import './App.css';
import {Counter} from "../counter";
import {Time} from "../time/time";
import {connect} from "react-redux";
import {AppState} from "state";

const logo = require('./logo.svg');

interface Props extends AppState {
  dispatch: (msg: any) => void;
}

const App = (props: Props) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit this <code>src/App.tsx</code> and save to reload.
    </p>
    <Counter count={props.counter.count} dispatch={props.dispatch}/>
    <Time {...props.time} dispatch={props.dispatch} />
  </div>);
  
const mapStateToProps = (state: AppState) => {
  return state;
}

const mapDispatchToProps = (dispatch: (msg: any) => void) => {
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
