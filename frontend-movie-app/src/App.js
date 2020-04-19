import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './containers/Homepage/Homepage';
import { connect } from 'react-redux'
import {
  FetchMovieGenreList
} from './store/actions/movie';
import {
  FetchTVGenreList
} from './store/actions/tv';
import AboutFilmpage from './containers/AboutFilmpage/AboutFilmpage';
import Footer from './components/Footer/Footer';

class App extends Component {
  componentDidMount() {
    this.props.onFetchTVGenreList()
    this.props.onFetchMovieGenreList()
  }
  render() {
    return (
      <BrowserRouter className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/:type/:title/:id" component={AboutFilmpage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onFetchTVGenreList: () => dispatch(FetchTVGenreList()),
      onFetchMovieGenreList: () => dispatch(FetchMovieGenreList()),
  };
};

export default connect(null, mapDispatchToProps)(App);
