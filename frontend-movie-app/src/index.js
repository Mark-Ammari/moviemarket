import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { combineReducers, compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import trendingReducer from './store/reducers/trending';
import movieNowPlayingReducer from './store/reducers/movieNowPlaying';
import moviePopularReducer from './store/reducers/moviePopular';
import movieTopRatedReducer from './store/reducers/movieTopRated';
import movieUpcomingReducer from './store/reducers/movieUpcoming';
import movieGenreListReducer from './store/reducers/movieGenreList';
import tvAiringTodayReducer from './store/reducers/tvAiringToday';
import tvOnTheAirReducer from './store/reducers/tvOnTheAir';
import tvPopularReducer from './store/reducers/tvPopular';
import tvTopRatedReducer from './store/reducers/tvTopRated';
import tvGenreListReducer from './store/reducers/tvGenreList'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  trending: trendingReducer,
  movieNowPlaying: movieNowPlayingReducer,
  moviePopular: moviePopularReducer,
  movieTopRated: movieTopRatedReducer,
  movieUpcoming: movieUpcomingReducer,
  movieGenreList: movieGenreListReducer,
  tvAiringToday: tvAiringTodayReducer,
  tvOnTheAir: tvOnTheAirReducer,
  tvPopular: tvPopularReducer,
  tvTopRated: tvTopRatedReducer,
  tvGenreList: tvGenreListReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
