import * as React from 'react';
import {State} from "./app.state";
import './app.css';
import { ActionHandler } from "utils";
import { connect } from "react-redux";

import {ZoneTree} from "./zone-tree";

const logo = require('./logo.svg');

interface Props extends State, ActionHandler {}

export const App = (props: Props) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit this <code>src/App.tsx</code> and save to reload.
    </p>
    <ZoneTree {...props.zoneTree} dispatch={props.dispatch} />
  </div>);

const mapStateToProps = (state: any) => (state);

const mapDispatchToProps = (dispatch: (msg: any) => void) => ({
    dispatch: dispatch});

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);