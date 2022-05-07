import React from 'react';
import s from './Contacts.module.css'
import sContainer from "../common/styles/container.module.css";

export function Contacts() {
  return (
    <div className={s.contacts}>
      <div className={`${sContainer.container} ${s.container}`}>
        <h3 className={s.title}>Контакты</h3>
        <form className={s.form}>
          <input/>
          <input/>
          <textarea></textarea>
        </form>
        <button className={s.button}>Отправить</button>
      </div>
    </div>
  );
}