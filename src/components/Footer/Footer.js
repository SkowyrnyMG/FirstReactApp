import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../assets/images/logo.svg';

const Footer = () => (
    <footer className={styles.wrapper}>
        <img className={styles.imageLogo} src={logo} alt='codeManiac Logo' />
        <p className={styles.info}>
            Author:{' '}
            <a
                href='https://www.linkedin.com/in/mateusz-gru%C5%BAla-99b0ab18b/'
                target='_blank'
                rel='noopener noreferrer'
            >
                Mateusz Gruźla
            </a>
        </p>
    </footer>
);

export default Footer;
