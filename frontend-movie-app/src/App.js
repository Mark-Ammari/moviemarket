import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './containers/Homepage/Homepage';
import { connect } from 'react-redux'
import {
  FetchMovieNowPlaying,
  FetchMoviePopular,
  FetchMovieTopRated,
  FetchMovieUpcoming
} from './store/actions/movie';
import FetchTrending from './store/actions/trending';

class App extends Component {

  componentDidMount() {
    this.props.onFetchTrending()
    this.props.onFetchNowPlaying()
    this.props.onFetchPopular()
    this.props.onFetchTopRated()
    this.props.onFetchUpcoming()
  }
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

const mapDispatchToProps = dispatch => {
  return {
      onFetchTrending: () => dispatch(FetchTrending()),
      onFetchNowPlaying: () => dispatch(FetchMovieNowPlaying()),
      onFetchPopular: () => dispatch(FetchMoviePopular()),
      onFetchTopRated: () => dispatch(FetchMovieTopRated()),
      onFetchUpcoming: () => dispatch(FetchMovieUpcoming())
  };
};

export default connect(null, mapDispatchToProps)(App);
