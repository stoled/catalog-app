import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import { Container } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/contact" component={ Contact } />
            <Route component={ NoMatch } />
          </Switch>
        </Router>
      </Container>
    </React.Fragment>
  );
}

export default App;
