import React from 'react';
import styles from './Root.module.scss';
import Banner from './Banner';

const Root = () => (
    <div className={styles.wrapper}>
        <Banner />
    </div>
);

export default Root;
