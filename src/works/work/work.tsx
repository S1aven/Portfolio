import React from 'react';
import s from './work.module.css'

type PropsType = {
  title: string
  description: string
}

export function Work(props: PropsType) {
  return (
    <div className={s.work}>
      <div className={s.background_image}>
        <a href={'@'} className={s.link}>Смотреть</a>
      </div>
      <h3 className={s.title}>{props.title}</h3>
      <div className={s.description}>{props.description}</div>
    </div>
  );
}