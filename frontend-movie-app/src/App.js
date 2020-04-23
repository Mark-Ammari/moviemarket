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
// import AboutFilmpage from './containers/AboutFilmpage/AboutFilmpage';
import Footer from './components/Footer/Footer';
import Errorpage from './containers/Errorpage/Errorpage';
import Moviepage from './containers/Moviepage/Moviepage';
import Showpage from './containers/Showpage/Showpage';

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
          <Route path="/movies/genre/:name/:id" component={Moviepage} />
          <Route path="/shows/genre/:name/:id" component={Showpage} />
          <Route component={Errorpage}/>
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
