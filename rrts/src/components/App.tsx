import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import { Store } from 'redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

export const _App = ({ todos, fetchTodos, deleteTodo }: AppProps) => {
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    console.log('hi');
    if (fetching === true) {
      setFetching(false);
      console.log(fetching);
    }

    return;
  }, [fetching]);
  const onClick = (): void => {
    fetchTodos();
    setFetching(true);
  };

  const onDeleteClick = (id: number): void => {
    deleteTodo(id);
  };

  const renderList = (): JSX.Element[] => {
    console.log('what');
    return todos.map((todo: Todo) => {
      return (
        <div onClick={() => onDeleteClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  };
  return (
    <div>
      <button onClick={onClick}>Fetch</button>
      {fetching ? 'LOADING' : null}
      {renderList()}
    </div>
  );
};

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
