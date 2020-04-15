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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  trending: trendingReducer,
  nowPlaying: movieNowPlayingReducer,
  popular: moviePopularReducer,
  topRated: movieTopRatedReducer,
  upcoming: movieUpcomingReducer
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
