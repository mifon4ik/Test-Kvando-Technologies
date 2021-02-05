import React from 'react';
import styles from './FormsControls.module.scss';

export const Input = ({ input, meta, dataText, ...props }) => {
  return (
    <label className={styles.field}>
      <input {...input} {...props} />
      <p>{dataText}</p>
    </label>
  )
}

export const Select = ({ input, meta, dataText, ...props }) => {
  return (
    <label className={styles.field}>
      <select {...input} {...props} />
      <span>{dataText}</span>
    </label>
  )
}

export const Textarea = ({ input, meta, dataText, ...props }) => {
  return (
    <label className={styles.field}>
      <textarea {...input} {...props} />
      <p>{dataText}</p>
    </label>
  )
}

export const Submit = (props) => {
  return (
    <input type='submit' className={styles.submit} value={props.value} />
  )
}

export const Button = (props) => {
  return (
    <input type='button' className={styles.submit} value={props.value} onClick={props.onClick} />
  )
}