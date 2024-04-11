import { useState } from 'react';
import style from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import avatarPng from '@/assets/avatar.png';
import avatarJpg from '@/assets/avatar.jpg';
import Calendar from '@/assets/calendar.svg';

//tree shaking: lazy loading + декомпозиция
function TODO() {
  console.log('todo');
}

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  if (__PLATFORM__ === 'desktop') {
    return <div>isDesktopPlatform</div>;
  }

  if (__PLATFORM__ === 'mobile') {
    return <div>isMobilePlatform</div>;
  }

  if (__ENV__ === 'development') {
    // addDevTools()
  }

  return (
    <div>
      <h1>platform={__PLATFORM__}</h1>
      <div>
        <img width={100} height={100} src={avatarPng} alt="avatar" />
        <img width={100} height={100} src={avatarJpg} alt="avatar" />
      </div>
      <div>
        <Calendar width={50} height={50} color={'green'} fill={'red'} />
      </div>
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
