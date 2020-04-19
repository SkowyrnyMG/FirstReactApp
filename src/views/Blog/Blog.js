import React from 'react';
import styles from './Blog.module.scss';
import BlogContext from '../../context';
import Button from '../../components/Button/Button';
import Article from './Article';
import Modal from './Modal';

const initialState = [
    {
        img: `https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg`,
        title: ' Such a great Title!',
        paragraph: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, perspiciatis nisi aspernatur ea fugiat modi perferendis, ducimus aperiam maiores officia quod doloremque illum reprehenderit placeat, dolorem amet odit? Itaque, eum. Lorem   LoremLorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, perspiciatis nisi aspernatur ea fugiat modi perferendis, ducimus aperiam maiores officia quod doloremque illum reprehenderit placeat, dolorem amet odit? Itaque, eum. Lorem   LoremLorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, perspiciatis nisi aspernatur ea fugiat modi perferendis, ducimus aperiam maiores officia quod doloremque illum reprehenderit placeat, dolorem amet odit? Itaque, eum. Lorem   LoremLorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, perspiciatis nisi aspernatur ea fugiat modi perferendis, ducimus aperiam maiores officia quod doloremque illum reprehenderit placeat, dolorem amet odit? Itaque, eum. Lorem   LoremLorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, perspiciatis nisi aspernatur ea fugiat modi perferendis, ducimus aperiam maiores officia quod doloremque illum reprehenderit placeat, dolorem amet odit? Itaque, eum. Lorem   Lorem`,
    },
    {
        img: `https://czerwonapigulka.pl/wp-content/uploads/2019/03/close-up-code-codes-239898-e1553797414585.jpg`,
        title: 'Code code code',
        paragraph: `que, eum. Lorem   LoremLorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, perspiciatis nisi aspernatur ea fugiat modi perferendis, ducimus aperiam maiores officia quod doloremque illum reprehenderit placeat, dolorem amet odit? Itaque, eum. Lorem   LoremLorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, perspiciatis nisi aspernatur ea fugiat modi perferendis, ducimus aperiam maiores officia quod doloremque illum reprehenderit placeat, dolorem amet odit? Itaque, eum. Lorem   LoremLorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, perspiciatis nisi aspernatur ea fugiat modi perferendis, ducimus aperiam maiores officia quod doloremque illum reprehenderit placeat, dol`,
    },
];

class Blog extends React.Component {
    state = {
        items: [...initialState],
        isModalOpen: false,
    };

    openModal = () => {
        this.setState({
            isModalOpen: true,
        });
    };

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        });
    };

    addPost = (e, newItem) => {
        e.preventDefault();

        this.setState((prevState) => ({
            items: [...prevState.items, newItem],
        }));
        this.closeModal();
    };

    render() {
        const { isModalOpen } = this.state;
        const contextElement = {
            ...this.state,
            addPost: this.addPost,
        };

        return (
            <BlogContext.Provider value={contextElement}>
                <div
                    className={
                        isModalOpen ? styles.wrapperBlur : styles.wrapper
                    }
                >
                    <h2 className={styles.mainHeading}>
                        Check out latest articles!
                    </h2>
                    <div className={styles.articlesHolder}>
                        {this.state.items.map((item) => (
                            <Article key={item.title} {...item} />
                        ))}
                    </div>
                    <Button handleClickFn={this.openModal}>
                        Add new post!
                    </Button>
                </div>
                {isModalOpen ? (
                    <Modal handleClickFn={() => this.closeModal} />
                ) : null}
            </BlogContext.Provider>
        );
    }
}

export default Blog;
