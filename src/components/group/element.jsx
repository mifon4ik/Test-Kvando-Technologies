import React from 'react';
import { filterTypeEnum } from '../../utils/filter-feed';
import { sortTypeEnum } from '../../utils/sorting-feed';
import { Button } from '../common/formsControls/FormsControls';
import style from './group.module.scss';

export const GroupNoFoundElement = React.memo(props => {
  return (
    <section>
      <div>В этой группе нет постов</div>
    </section>
  )
})

const GroupElement = React.memo(props => {
  return (
    <>
      <section>
        <h1>ЛЕНТА</h1>
        <hr />
      </section>
      <section>
        <h3>Сортировка</h3>
        <hr />
      </section>
      <section className={style.sectionButtons}>
        <Button value='Лайки' onClick={() => props.selectSort(sortTypeEnum.likes)} />
        <Button value='Репосты' onClick={() => props.selectSort(sortTypeEnum.reposts)} />
        <Button value='Комментарии' onClick={() => props.selectSort(sortTypeEnum.comments)} />
        <Button value='Дата' onClick={() => props.selectSort(sortTypeEnum.date)} />
      </section>
      <section>
        <h3>Фильтр</h3>
        <hr />
      </section>
      <section className={style.sectionButtons}>
        <Button value='Сбросить' onClick={() => props.selectFilter(filterTypeEnum.disable)} />
        <Button value='Фото' onClick={() => props.selectFilter(filterTypeEnum.photo)} />
        <Button value='Ссылки' onClick={() => props.selectFilter(filterTypeEnum.link)} />
        <Button value='Видео' onClick={() => props.selectFilter(filterTypeEnum.video)} />
      </section>
      <section className={style.sectionPosts}>
        {
          props.filterFeed && props.filterFeed.length === 0 ? 'Подходящих постов нет' : ''
        }
        {
          (props.filterFeed ? props.filterFeed : props.feed ).map(function (object, i) {
            const date = new Date(object.date * 1000);
            return (
              <div key={i} className={style.sectionPosts__item}>
                <div className={style.sectionPosts__item__header}>
                  <div>Дата: {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}</div>
                  <div>Лайков: {object.likes.count}</div>
                  <div>Репостов: {object.reposts.count}</div>
                  <div>Комментариев: {object.comments.count}</div>
                </div>
                <div>Текст: {object.text}</div>
                <div>
                  {formatAttachments(object.attachments)}
                </div>
              </div>
            )
          })
        }
      </section>
    </>
  )
})

const formatAttachments = (attachments) => {
  if (attachments) {
    return attachments.map(function (object, i) {
      switch (object.type) {
        case 'photo':
          return (
            <div className={style.sectionPosts__item__photo} key={i}>
              <img src={object.photo.photo_604 || object.photo.photo_130 || object.photo.photo_75}
                alt='' />
            </div>
          )
        case 'video':
          return (
            <div className={style.sectionPosts__item__video} key={i}>
              <img src={object.video.photo_320 || object.video.photo_130} alt='' />
              <img className={style.sectionPosts__item__video__playButton} src={process.env.PUBLIC_URL + '/images/play_video.png'} alt='' onClick={() => alert('Нет, я не воспроизвожу видео :c')} />
            </div>
          )
        case 'link':
          return (
            <div className={style.sectionPosts__item__link} key={i}>
              <a href={object.link.url}>{object.link.title}</a>
            </div>
          )
        default:
          return (
            <div key={i}>Вложение "{object.type}" не поддерживается!</div>
          )
      }
    })
  }
}

export default GroupElement;