import React from 'react';
import s from './Footer.module.css'
import sContainer from "../common/styles/container.module.css";

export function Footer() {
  return (
    <div className={s.footer}>
      <div className={`${sContainer.container} ${s.container}`}>
        <h3>Сергей Руднев</h3>
        <div className={s.social}>
          <div className={s.social_item}>
            <a href={'@'}>inst</a>
          </div>
          <div className={s.social_item}>
            <a href={'@'}>inst</a>
          </div>
          <div className={s.social_item}>
            <a href={'@'}>inst</a>
          </div>
          <div className={s.social_item}>
            <a href={'@'}>inst</a>
          </div>
        </div>
        <span>2019 Все права защищены</span>
      </div>
    </div>
  );
}