import React, { Component } from 'react';
import { FetchMovieDiscover } from '../../store/actions/movie';
import { FetchTVDiscover } from '../../store/actions/tv';
import { connect } from 'react-redux';
import MovieList from './MovieList/MovieList';
class Genrepage extends Component {
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
                <MovieList />
            </div>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovieDiscover: (sortBy, includeAdult, includeVideo, page, withGenres) => dispatch(FetchMovieDiscover(sortBy, includeAdult, includeVideo, page, withGenres)),
        // onFetchTVDiscover: () => dispatch(FetchTVDiscover())
    }
}

export default connect(null, mapDispatchToProps)(Genrepage);