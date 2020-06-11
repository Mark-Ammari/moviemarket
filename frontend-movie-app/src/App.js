import React, { Component, Suspense } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import {
  FetchMovieGenreList
} from './store/actions/movie';
import {
  FetchTVGenreList
} from './store/actions/tv';
import Footer from './components/Footer/Footer';
import ScrollToTop from './ScrollToTop';
import { Homepage, Moviepage, AboutMoviepage, Errorpage, Authenticate, Favoritespage } from './routes/routes';
import MobileLoader from './components/Loader/MobileLoader';
import { isAuthUser } from './store/actions/authUser';
import Auth from './context/context';

class App extends Component {
  componentDidMount() {
    this.props.onFetchTVGenreList()
    this.props.onFetchMovieGenreList()
    this.props.onFetchIsAuthUser()
  }

  componentDidUpdate(prevProps) {
    if (this.props.isAuth.isAuth !== prevProps.isAuth.isAuth) {
      this.props.onFetchIsAuthUser()
    }
  }

  render() {
    if (this.props.isAuthLoad) {
      return null
    } else {
      return (
        <Auth.Provider value={{
          isAuth: this.props.isAuth.isAuth
        }}>
          <BrowserRouter className="App">
            <ScrollToTop />
            <Header />
            <Suspense fallback={<div className="fallback"><MobileLoader /></div>}>
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/account/auth">
                  <Auth.Consumer>
                    {value => value.isAuth ? <Redirect to="/"/> : <Authenticate />}
                  </Auth.Consumer>
                </Route>
                <Route path="/:type/genre/:name/:id/:page" component={Moviepage} />
                <Route path="/:type/:title/:id" component={AboutMoviepage} />
                <Route path="/account/favorites" component={Favoritespage} />
                <Route component={Errorpage} />
              </Switch>
            </Suspense>
            <Footer />
          </BrowserRouter>
        </Auth.Provider>
      );
    };
  }
};

const mapStateToProps = state => {
  return {
    isAuth: state.isAuth.isAuth,
    isAuthLoad: state.isAuth.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchIsAuthUser: () => dispatch(isAuthUser()),
    onFetchTVGenreList: () => dispatch(FetchTVGenreList()),
    onFetchMovieGenreList: () => dispatch(FetchMovieGenreList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
