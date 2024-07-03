import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Sidebar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/page1" component={Page1} />
                    <Route path="/page2" component={Page2} />
                    <Route path="/page3" component={Page3} />
                    <Route path="/page4" component={Page4} />
                    <Route path="/page5" component={Page5} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
