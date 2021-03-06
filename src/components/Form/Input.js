import React from 'react';
import styles from './Input.module.scss';

const Input = ({ textarea, inputName, ...props }) => {
    const InputTag = textarea ? 'textarea' : 'input';

    return (
        <label className={styles.wrapper} htmlFor={inputName}>
            <InputTag
                className={textarea ? styles.textarea : styles.input}
                name={inputName}
                type='text'
                autoComplete='off'
                placeholder=' '
                {...props}
            />
            <div className={styles.inputPlaceholder}>{inputName}</div>
        </label>
    );
};

export default Input;
