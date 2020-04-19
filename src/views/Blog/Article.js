import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article.module.scss';
import Heading from '../../components/Heading/Heading';

const Article = ({ img, title, paragraph }) => {
    const ImgTag = img ? 'img' : 'div';

    return (
        <article className={styles.wrapper}>
            <ImgTag
                className={img ? styles.articleImg : styles.articleImgDefault}
                src={img}
                alt='Article photo'
            />
            <div className={styles.contentBox}>
                <Heading>{title}</Heading>
                <p className={styles.paragraph}>{paragraph}</p>
            </div>
        </article>
    );
};

Article.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    paragraph: PropTypes.string,
};

export default Article;
