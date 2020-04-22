import React, { Component } from 'react';
import { FetchMovieDiscover } from '../../store/actions/movie';
import { FetchTVDiscover } from '../../store/actions/tv';
import { connect } from 'react-redux';
import MovieList from './MovieList/MovieList';

class Genrepage extends Component {
    componentDidMount() {
        this.props.onFetchMovieDiscover();
        this.props.onFetchTVDiscover();
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
        onFetchMovieDiscover: () => dispatch(FetchMovieDiscover()),
        onFetchTVDiscover: () => dispatch(FetchTVDiscover())
    }
}

export default connect(null, mapDispatchToProps)(Genrepage);