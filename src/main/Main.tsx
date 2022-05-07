import React from 'react';
import s from './Main.module.css'
import sContainer from '../common/styles/container.module.css'

export function Main() {
  return (
    <div className={s.main}>
      <div className={sContainer.container}>
        <div className={s.text}>
          <span>Привет!</span>
          <h1>Меня зовут Сергей Руднев</h1>
          <p>Я front-end разработчик</p>
        </div>
        <div className={s.photo}>

        </div>
      </div>
    </div>
  );
}