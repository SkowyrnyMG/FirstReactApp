import React from 'react';
import styles from './Form.module.scss';
import BlogContext from '../../context';
import Input from './Input';
import Button from '../Button/Button';

class Form extends React.Component {
    state = {
        title: '',
        img: '',
        paragraph: '',
    };

    handleInputChangeFn = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });

        // console.log(`
        // title: ${this.state.title}
        // img: ${this.state.img}
        // paragraph: ${this.state.paragraph}
        // `);
    };

    render() {
        return (
            <BlogContext.Consumer>
                {(context) => (
                    <form
                        className={styles.wrapper}
                        action='submit'
                        onSubmit={(e) => context.addPost(e, this.state)}
                    >
                        <Input
                            inputName='title'
                            onChange={this.handleInputChangeFn}
                            value={this.state.title}
                            required
                        />
                        <Input
                            inputName='img'
                            onChange={this.handleInputChangeFn}
                            value={this.state.img}
                        />
                        <Input
                            inputName='paragraph'
                            textarea
                            onChange={this.handleInputChangeFn}
                            value={this.state.paragraph}
                            required
                        />
                        <Button>add post</Button>
                    </form>
                )}
            </BlogContext.Consumer>
        );
    }
}

export default Form;
