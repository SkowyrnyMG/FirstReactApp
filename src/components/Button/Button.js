import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, forwarder, path, handleClickFn }) => (
    <>
        {forwarder ? (
            <Link to={path} className={styles.btn}>
                {children}
            </Link>
        ) : (
            <button className={styles.btn} onClick={handleClickFn}>
                {children}
            </button>
        )}
    </>
);

export default Button;

Button.propTypes = {
    children: PropTypes.string.isRequired,
};

Button.defaultProps = {
    forwarder: null,
    path: null,
};
