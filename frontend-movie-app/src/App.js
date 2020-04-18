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
import {
  FetchTVAiringToday,
  FetchTVPopular,
  FetchTVTopRated,
  FetchTVOnTheAir
} from './store/actions/tv';
import FetchTrending from './store/actions/trending';
import AboutFilmpage from './containers/AboutFilmpage/AboutFilmpage';

class App extends Component {

  componentDidMount() {
    this.props.onFetchTrending()
    this.props.onFetchMovieNowPlaying()
    this.props.onFetchMoviePopular()
    this.props.onFetchMovieTopRated()
    this.props.onFetchMovieUpcoming()
    this.props.onFetchTVAiringToday()
    this.props.onFetchTVOnTheAir()
    this.props.onFetchTVPopular()
    this.props.onFetchTVTopRated()
  }
  render() {
    return (
      <BrowserRouter className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/:type/:title/:id" component={AboutFilmpage} />
        </Switch>
      </BrowserRouter>
    );
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onFetchTrending: () => dispatch(FetchTrending()),
      onFetchMovieNowPlaying: () => dispatch(FetchMovieNowPlaying()),
      onFetchMoviePopular: () => dispatch(FetchMoviePopular()),
      onFetchMovieTopRated: () => dispatch(FetchMovieTopRated()),
      onFetchMovieUpcoming: () => dispatch(FetchMovieUpcoming()),
      onFetchTVAiringToday: () => dispatch(FetchTVAiringToday()),
      onFetchTVOnTheAir: () => dispatch(FetchTVOnTheAir()),
      onFetchTVPopular: () => dispatch(FetchTVPopular()),
      onFetchTVTopRated: () => dispatch(FetchTVTopRated())
  };
};

export default connect(null, mapDispatchToProps)(App);
