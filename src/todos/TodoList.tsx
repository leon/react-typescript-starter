import * as React from 'react';
import {Observable} from 'rxjs/Observable';
import ITodo from './ITodo';
import Todo from './Todo';

const todo: ITodo = {
  name: 'my todo',
  tags: [
    'tag-1',
    'tag-2'
  ]
};

interface ITodoListProps {
  onClick$?: Observable<any>;
}

const TodoList = (props?: ITodoListProps) => {
  console.log('props', props);
  return (<Todo todo={todo}/>);
};

export default rxConnect(TodoList;
