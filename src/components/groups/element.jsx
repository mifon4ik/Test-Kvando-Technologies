import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Submit } from '../common/formsControls/FormsControls';
import style from '../common/formsControls/FormsControls.module.scss';
import styleGroup from './groups.module.scss';

const SearchForm = reduxForm({ form: 'searchForm' })(props => {
  return (
    <form onSubmit={props.handleSubmit} className={style.sampleForm}>
      <Field component={Input} type='search' name='search' dataText='Поиск группы'
        required={true} />
      <Submit value='Искать' />
    </form>
  )
});

const GroupsElement = props => {
  return (
    <section>
      <SearchForm onSubmit={props.searchGroup} />
      <div className={styleGroup.groups}>
        {
          props.groups.map(function (object, i) {
            return (
              <a href={'/groups/' + object.id} className={styleGroup.groups__item} key={i}>
                <div>{object.name}</div>
                <div className={styleGroup.groups__item__img}>
                  <img src={object.photo_200 ? object.photo_200 : '%PUBLIC_URL%/images/no_photo.png'}
                    alt='' />
                </div>
              </a>
            )
          })
        }
      </div>
    </section>
  )
}

export default GroupsElement;