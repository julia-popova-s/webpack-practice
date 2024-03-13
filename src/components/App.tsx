import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return <button onClick={increment}>{count}</button>;
};
