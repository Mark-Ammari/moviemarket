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
import movieDiscoverReducer from './store/reducers/movieDiscover';
import movieVideoReducer from './store/reducers/aboutMovie/movieVideos'
import movieDetailsReducer from './store/reducers/aboutMovie/movieDetails'
import movieImagesReducer from './store/reducers/aboutMovie/movieImages'
import movieKeywordsReducer from './store/reducers/aboutMovie/movieKeywords'
import movieRecommendationsReducer from './store/reducers/aboutMovie/movieRecommendations'
import movieReviewsReducer from './store/reducers/aboutMovie/movieReviews'
import movieSimilarReducer from './store/reducers/aboutMovie/movieSimilar'
import movieCreditsReducer from './store/reducers/aboutMovie/movieCredits';

import tvAiringTodayReducer from './store/reducers/tvAiringToday';
import tvOnTheAirReducer from './store/reducers/tvOnTheAir';
import tvPopularReducer from './store/reducers/tvPopular';
import tvTopRatedReducer from './store/reducers/tvTopRated';
import tvGenreListReducer from './store/reducers/tvGenreList'
import tvDiscoverReducer from './store/reducers/tvDiscover';
import tvCreditsReducer from './store/reducers/aboutShow/tvCredits';
import tvVideoReducer from './store/reducers/aboutShow/tvVideos';
import tvDetailsReducer from './store/reducers/aboutShow/tvDetails';
import tvImagesReducer from './store/reducers/aboutShow/tvImages';
import tvKeywordsReducer from './store/reducers/aboutShow/tvKeywords';
import tvSimilarReducer from './store/reducers/aboutShow/tvSimilar';
import tvRecommendationsReducer from './store/reducers/aboutShow/tvRecommendations';
import tvReviewsReducer from './store/reducers/aboutShow/tvReviews';
import movieSearchReducer from './store/reducers/movieSearch';
import tvSearchReducer from './store/reducers/tvSearch';
import typeOfFilmReducer from './store/reducers/typeOfFilm';
import userSignupReducer from './store/reducers/userInfo/userSignup';
import userLoginReducer from './store/reducers/userInfo/userLogin';
import userLogoutReducer from './store/reducers/userInfo/userLogout';
import authValidReducer from './store/reducers/userInfo/isAuthValid';
import getUserDetailsReducer from './store/reducers/userInfo/getUserDetails';
import favoritesReducer from './store/reducers/userInfo/getFavorites';
import addToFavoritesReducer from './store/reducers/userInfo/addToFavorites';
import removeFromFavoritesReducer from './store/reducers/userInfo/removeFromFavorites';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  trending: trendingReducer,

  movieNowPlaying: movieNowPlayingReducer,
  moviePopular: moviePopularReducer,
  movieTopRated: movieTopRatedReducer,
  movieUpcoming: movieUpcomingReducer,
  movieGenreList: movieGenreListReducer,
  movieDiscover: movieDiscoverReducer,
  movieSearch: movieSearchReducer,

  tvAiringToday: tvAiringTodayReducer,
  tvOnTheAir: tvOnTheAirReducer,
  tvPopular: tvPopularReducer,
  tvTopRated: tvTopRatedReducer,
  tvGenreList: tvGenreListReducer,
  tvDiscover: tvDiscoverReducer,
  tvCredits: tvCreditsReducer,
  tvSearch: tvSearchReducer,

  movieVideos: movieVideoReducer,
  movieDetails: movieDetailsReducer,
  movieImages: movieImagesReducer,
  movieKeywords: movieKeywordsReducer,
  movieReviews: movieReviewsReducer,
  movieSimilar: movieSimilarReducer,
  movieRecommendations: movieRecommendationsReducer,
  movieCredits: movieCreditsReducer,

  tvVideos: tvVideoReducer,
  tvDetails: tvDetailsReducer,
  tvImages: tvImagesReducer,
  tvKeywords: tvKeywordsReducer,
  tvReviews: tvReviewsReducer,
  tvSimilar: tvSimilarReducer,
  tvRecommendations: tvRecommendationsReducer,

  typeOfFilm: typeOfFilmReducer,
  
  signup: userSignupReducer,
  login: userLoginReducer,
  logout: userLogoutReducer,
  isAuth: authValidReducer,

  userDetails: getUserDetailsReducer,
  favorites: favoritesReducer,
  addToFavorites: addToFavoritesReducer,
  removeFromFavorites: removeFromFavoritesReducer
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
