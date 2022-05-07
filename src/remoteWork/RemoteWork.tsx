import React from 'react';
import s from './RemoteWork.module.css'
import sContainer from './../common/styles/container.module.css'

export function RemoteWork() {
  return (
    <div className={s.remote_work}>
      <div className={`${sContainer.container} ${s.container}`}>
        <h2>Рассматриваю варианты удаленной работы</h2>
        <button>Нанять</button>
      </div>
    </div>
  );
}