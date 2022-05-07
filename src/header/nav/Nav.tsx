import s from './Nav.module.css'
import React from 'react';

export function Nav() {
  return (
    <div className={s.nav}>
      <a href={'@'}>Главная</a>
      <a href={'@'}>Скиллы</a>
      <a href={'@'}>Работы</a>
      <a href={'@'}>Контакты</a>
    </div>
  );
}