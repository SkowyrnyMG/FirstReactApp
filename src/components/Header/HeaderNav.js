import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNav.module.scss';

const HeaderNav = () => (
    <nav className={styles.wrapper}>
        <NavLink
            exact
            to='/'
            className={styles.link}
            activeClassName={styles.linkActive}
        >
            Home
        </NavLink>
        <NavLink
            to='/blog'
            className={styles.link}
            activeClassName={styles.linkActive}
        >
            Blog
        </NavLink>
        <NavLink
            to='/contact'
            className={styles.link}
            activeClassName={styles.linkActive}
        >
            Contact
        </NavLink>
    </nav>
);

export default HeaderNav;
