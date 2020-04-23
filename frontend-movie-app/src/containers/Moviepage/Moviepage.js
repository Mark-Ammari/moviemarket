import React, { Component } from 'react';
import { FetchTVDiscover } from '../../store/actions/tv';
import { connect } from 'react-redux';
import FilmBanner from '../../components/FilmBanner/FilmBanner';
import MovieList from './MovieList/MovieList';
import {
    FetchMovieDiscover
} from '../../store/actions/movie';

class Moviepage extends Component {
    componentDidMount() {
        this.props.onFetchMovieDiscover("popularity.desc", true, true, 1, this.props.match.params.id);

    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.onFetchMovieDiscover("popularity.desc", true, true, 1, this.props.match.params.id)
        }
    }

    render() {
        return (
            <div>
                <FilmBanner />
                <MovieList />
            </div>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovieDiscover: (sortBy, includeAdult, includeVideo, page, withGenres) => dispatch(FetchMovieDiscover(sortBy, includeAdult, includeVideo, page, withGenres)),
    }
}

export default connect(null, mapDispatchToProps)(Moviepage);