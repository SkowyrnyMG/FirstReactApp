import React from 'react';
import styles from './Form.module.scss';
import Input from './Input';

const Form = () => (
    <form className={styles.wrapper} action='submit'>
        <Input inputName='title' />
        <Input inputName='link' />
        <Input inputName='content' textarea />
    </form>
);

export default Form;
