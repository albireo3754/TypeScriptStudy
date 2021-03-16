import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { Store } from 'redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

export const _App = ({ todos, fetchTodos }: AppProps) => {
  const onClick = (): void => {
    fetchTodos();
  };

  const renderList = (): JSX.Element[] => {
    console.log('what');
    return todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  };
  return (
    <div>
      <button onClick={onClick}>Fetch</button>
      {renderList()}
    </div>
  );
};

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
