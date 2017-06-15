import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Provider} from "react-redux";
import {ConnectedApp} from "components/app/app.component";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();

