import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';
import Header from './components/Header';

const App = () => {
    return (
        <Router>
            <Header />
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/cart' exact>
                <Cart />
            </Route>
        </Router>
    )
}

export default App;