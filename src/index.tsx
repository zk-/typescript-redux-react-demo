import * as React from "react";
import * as ReactDOM from "react-dom";

import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import Hello from './containers/Hello';
import { Provider } from 'react-redux';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
	<Provider store={store}>
	  <Hello name="typescript"/>
	</Provider>,
	document.getElementById('root') as HTMLElement
  );