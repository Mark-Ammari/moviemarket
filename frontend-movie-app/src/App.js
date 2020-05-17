import React, { Component, Suspense } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import {
  FetchMovieGenreList
} from './store/actions/movie';
import {
  FetchTVGenreList
} from './store/actions/tv';
import Footer from './components/Footer/Footer';
import ScrollToTop from './ScrollToTop';
import { Homepage, Moviepage, Showpage, AboutMoviepage, AboutShowpage, Errorpage } from './routes/routes';
import MobileLoader from './components/Loader/MobileLoader';

class App extends Component {
  componentDidMount() {
    this.props.onFetchTVGenreList()
    this.props.onFetchMovieGenreList()
  }
  render() {
    return (
      <BrowserRouter className="App">
        <ScrollToTop />
        <Header />
        <Suspense fallback={<div className="fallback"><MobileLoader /></div>}>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/movies/genre/:name/:id/:page" component={Moviepage} />
            <Route path="/shows/genre/:name/:id/:page" component={Showpage} />
            <Route path="/movie/:title/:id" component={AboutMoviepage} />
            <Route path="/show/:title/:id" component={AboutShowpage} />
            <Route component={Errorpage} />
          </Switch>
        </Suspense>
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
