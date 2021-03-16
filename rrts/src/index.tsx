import React, { useState } from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

const App = ({ color }: AppProps) => {
  const [counter, setCounter] = useState(0);

  const onIncrement = (): void => {
    setCounter((prevState) => prevState + 1);
  };

  const onDecrement = (): void => {
    setCounter((prevState) => prevState - 1);
  };
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      {counter}
      {counter}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
