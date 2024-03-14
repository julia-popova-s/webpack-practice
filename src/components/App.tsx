import { useState } from 'react';
import style from './App.module.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <button className={style.button} onClick={increment}>
      {count}
    </button>
  );
};
