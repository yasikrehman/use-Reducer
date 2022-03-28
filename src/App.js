import React, { useReducer, useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);

  function stateUpdate(state, action) {
    switch (action.type) {
      case 'increment':
        return setCount((count) => count + 1);
      case 'decrement':
        return setCount((count) => count - 1);
    }
  }

  const [state, dispatch] = useReducer(stateUpdate, count);

  return (
    <div>
      <h1>count:{count}</h1>
      <p onClick={() => dispatch({ type: 'increment' })}>increment</p>
    </div>
  );
}
