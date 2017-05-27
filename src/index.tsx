import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Provider} from "react-redux";
import {createStore} from "./state";

let store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();