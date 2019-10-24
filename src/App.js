import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Catalog from './pages/Catalog';
import Product from './pages/Product';
import NoMatch from './pages/NoMatch';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/catalog" component={ Catalog } />
          <Route exact path="/catalog/:slug" component={ Product } />
          <Route exact path="/contact" component={ Contact } />
          <Route component={ NoMatch } />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
