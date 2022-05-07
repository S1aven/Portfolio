import React from 'react';
import s from './Skills.module.css'
import sContainer from './../common/styles/container.module.css'
import {Skill} from "./skill/Skill";

export function Skills() {
  return (
    <div className={s.skills}>
      <div className={`${sContainer.container} ${s.container}`} >
        <h2>My skills</h2>
        <div className={s.skills_item}>
          <Skill title={'JS'} description={'Подробное описание навыка'}/>
          <Skill title={'CSS'} description={'Подробное описание навыка'}/>
          <Skill title={'React'} description={'Подробное описание навыка'}/>
        </div>
      </div>
    </div>
  );
}
