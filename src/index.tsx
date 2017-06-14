import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './components/app/app.component';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Provider} from "react-redux";
import {createStore, AppState} from "./state";
import {connect} from "react-redux";
import {services} from "./services";

let store = createStore(...services);

const mapStateToProps = (state: AppState) => {
  return state;
}

const mapDispatchToProps = (dispatch: (msg: any) => void) => {
  return {
    dispatch: dispatch
  }
}

const Child = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}>
    <Child />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();

