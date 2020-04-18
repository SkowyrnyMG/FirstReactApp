import React from 'react';
import styles from './Heading.module.scss';

const Heading = ({ children }) => <h3 className={styles.title}>{children}</h3>;

export default Heading;
