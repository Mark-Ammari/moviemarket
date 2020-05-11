import React, { Component } from 'react';
import { FetchTVDiscover } from '../../store/actions/tv';
import { connect } from 'react-redux';
import FilmBanner from '../../components/FilmBanner/FilmBanner';
import MovieList from './MovieList/MovieList';
import {
    FetchMovieDiscover
} from '../../store/actions/movie';
import PaginateList from '../../components/PaginateList/PaginateList';

class Moviepage extends Component {
    state = {
        page: parseInt(this.props.match.params.page)
    }

    pushHistory = () => {
        this.props.history.push({
            pathname: `/movies/genre/${this.props.match.params.name}/${this.props.match.params.id}/${this.state.page.toString()}`,
        })
    }

    goBackHandler = () => {
        this.setState(prevState => ({
            page: prevState.page - 1
        }))
    }
    goForwardHandler = () => {
        this.setState(prevState => ({
            page: prevState.page + 1
        }))
    }

    componentDidMount() {
        this.props.onFetchMovieDiscover("popularity.desc", true, true, this.state.page, this.props.match.params.id);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.id !== prevProps.match.params.id || this.state.page !== prevState.page) {
            this.props.onFetchMovieDiscover("popularity.desc", true, true, this.state.page, this.props.match.params.id);
            this.pushHistory()
        }
    }

    render() {
        return (
            <div>
                <FilmBanner />
                <MovieList
                    goForward={this.goForwardHandler}
                    goBack={this.goBackHandler}
                    current={this.state.page}
                />
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovieDiscover: (sortBy, includeAdult, includeVideo, page, withGenres) => dispatch(FetchMovieDiscover(sortBy, includeAdult, includeVideo, page, withGenres)),
    }
}

export default connect(null, mapDispatchToProps)(Moviepage);