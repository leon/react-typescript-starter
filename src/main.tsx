import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Observable} from 'rxjs/Observable';

import RxProvider from './rx/RxProvider';

import todoStore from './stores/TodoStore';
import ITodo from './todos/ITodo';

import App from './App';

interface IState {
  todos: ITodo[];
}

const state$: Observable<IState> = Observable.combineLatest(
  todoStore.state$,

  // Group into state object
  (todos) => ({
    todos
  })
);

ReactDOM.render(
  <RxProvider state$={state$}>
    <App />
  </RxProvider>,
  document.getElementById('app')
);

// Support Hot Module Replacement
// check if HMR is enabled and if, allow all modules to be updated
declare var module: any;
if (module.hot) {
    module.hot.accept();
}
