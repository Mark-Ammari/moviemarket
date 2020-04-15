import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './containers/Homepage/Homepage';

class App extends Component {
  render() {
    return (
      <BrowserRouter className="App">
        <Header />
        <Switch>
          <Route path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    );
  };
};

export default App;
