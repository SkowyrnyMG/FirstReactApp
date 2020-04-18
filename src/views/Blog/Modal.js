import React from 'react';
import styles from './Modal.module.scss';
import Heading from '../../components/Heading/Heading';
import Form from '../../components/Form/From';

const Modal = ({ handleClickFn }) => (
    <div className={styles.wrapper}>
        <div className={styles.modalBox}>
            <button
                className={styles.closeModalBtn}
                onClick={handleClickFn()}
            />
            <Heading>What do you want to share?</Heading>
            <Form />
        </div>
    </div>
);

export default Modal;
