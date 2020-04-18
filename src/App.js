import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Root from './views/Root/Root';
import Blog from './views/Blog/Blog';
import Contact from './views/Contact/Contact';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => (
    <>
        <div className={styles.wrapper}>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Root} />
                    <Route path='/blog' component={Blog} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </Router>
        </div>
        <Footer />
    </>
);

export default App;
