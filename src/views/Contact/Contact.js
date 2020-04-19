import React from 'react';
import styles from './Contact.module.scss';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Form/Input';
import Button from '../../components/Button/Button';

const Contact = () => (
    <div className={styles.wrapper}>
        <Heading>Catch me up via form blow!</Heading>
        <div className={styles.contactBox}>
            <div className={styles.infoBox}>
                <h3>Hello everyone!</h3>
                <p>
                    The site what you are on already was made to practice basics
                    of React.
                    <br /> I know that there are some issues which should be
                    fixed, but I will not do it by now, because I think this is
                    good time to move on to learn more React possibilites.
                    Please check my GH page from time to time if you want to
                    track my learning progress.
                    <br /> Thank you for your time! If you would like to share
                    some tips and tricks with me or if you are looking for
                    Junior React Developer feel free to contact with me via
                    form. <br />
                    Have a wonderful day! <br />
                    >>Mateusz Gruźla
                </p>
            </div>
            <form
                className={styles.formWrapper}
                name='contact'
                method='POST'
                data-netlify='true'
                data-netlify-recaptcha='true'
                data-netlify-honeypot='bot-field'
            >
                <input type='hidden' name='form-name' value='contact' />
                <input type='hidden' name='bot-field' />
                <Input inputName='name' required />
                <Input inputName='email' required />
                <Input inputName='message' textarea required />
                <div data-netlify-recaptcha='true'></div>
                <Button>send!</Button>
            </form>
        </div>
    </div>
);

export default Contact;
