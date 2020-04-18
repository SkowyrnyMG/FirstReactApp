import React from 'react';
import logo from '../../assets/images/logo.svg';
import styles from './Header.module.scss';
import HeaderNav from './HeaderNav';

const Header = () => (
    <header className={styles.wrapper}>
        <img className={styles.logoImage} src={logo} alt='codeManiac Logo' />
        <HeaderNav />
    </header>
);

export default Header;
