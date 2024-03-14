import { useState } from 'react';
import style from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <Link to={'/about'}>about</Link>
      <br />
      <Link to={'/shop'}>shop</Link>

      <h1>{count}</h1>
      <button className={style.button} onClick={increment}>
        inc
      </button>

      <Outlet />
    </div>
  );
};
