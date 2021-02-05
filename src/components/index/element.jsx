import React from 'react';
import { Button } from '../common/formsControls/FormsControls';
import style from '../common/formsControls/FormsControls.module.scss';

const IndexElement = props => {
  return (
    <section>
      <div className={style.sampleForm}>
        <Button value='Войти' onClick={props.vkLogin} />
      </div>
    </section>
  )
}

export default IndexElement;