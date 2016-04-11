import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import ITodo from '../todos/ITodo';

class TodoStore {
  private _state$: Subject<ITodo[]>;

  constructor() {
    this._state$ = new ReplaySubject<ITodo[]>(1);

    this._state$.next([]);
  }

  get state$() {
    return this._state$.asObservable();
  }

  update() {
    this._state$.next([]);
  }
}

const todoStore = new TodoStore();
export default todoStore;
