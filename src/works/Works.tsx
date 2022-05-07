import React from 'react';
import s from './Works.module.css';
import sContainer from "../common/styles/container.module.css";
import {Work} from "./work/work";

export function Works() {
  return (
    <div className={s.works}>
      <div className={`${sContainer.container} ${s.container}`}>
        <h2>My works</h2>
        <div className={s.works_item}>
          <Work title={'Название проекта'} description={"Краткое описание"}/>
          <Work title={'Название проекта'} description={"Краткое описание"}/>
        </div>
      </div>
    </div>
  );
}