import s from './Header.module.css'
import React from 'react';
import {Nav} from "./nav/Nav";

export function Header() {
  return (
    <div className={s.header}>
      <Nav/>
    </div>
  );
}