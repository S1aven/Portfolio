import React from 'react';
import s from './Skill.module.css'

type PropsType = {
  title: string
  icon?: string
  description: string
}

export function Skill(props: PropsType) {
  return (
    <div className={s.skill}>
      <div className={s.icon}></div>
      <h3 className={s.title}>{props.title}</h3>
      <div className={s.description}>{props.description}</div>
    </div>
  );
}