import * as React from 'react';
import ITodo from './ITodo';

interface ITodoProps {
  todo: ITodo;
}

const styles = {
  todo: {
    backgroundColor: '#eee',
    color: '#f00'
  }
};

const Todo = (props: ITodoProps) => (
  <div className="todo" style={styles.todo}>
    <h3>{props.todo.name}</h3>
  </div>
);

export default Todo;
