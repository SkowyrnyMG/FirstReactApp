import React from 'react';
import styles from './Banner.module.scss';
import bannerImg from '../../assets/images/Banenr.svg';
import Button from '../../components/Button/Button';

const Banner = () => (
    <div className={styles.wrapper}>
        <h1 className={styles.mainHeading}>The best coding blog!</h1>
        <div className={styles.info}>
            <p>
                This is the place where you all can copy/paste stuff from
                Stackoverflow and act like a pro before some Junior devs!
            </p>
            <Button forwarder path='/blog'>
                Start bloging!
            </Button>
        </div>
        <img className={styles.bannerImg} src={bannerImg} alt='Baner Coding' />
    </div>
);

export default Banner;
