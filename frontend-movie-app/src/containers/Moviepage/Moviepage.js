import React, { Component } from 'react';
import { FetchMovieDiscover } from '../../store/actions/movie';
import { connect } from 'react-redux';
import FilmBanner from '../../components/FilmBanner/FilmBanner';
import MovieList from './MovieList/MovieList';
import FilterBar from '../../components/FilterBar/FilterBar';

class Moviepage extends Component {
    state = {
        page: parseInt(this.props.match.params.page),
        sort: '',
        isAdult: false,
        hasVideo: false,
    }

    handleSortChange = (event) => {
        this.setState({ sort: event.target.value });
    };

    handleAdultChange = (event) => {
        this.setState({ isAdult: event.target.checked });
    };

    handleVideoChange = (event) => {
        this.setState({ hasVideo: event.target.checked });
    };

    pushHistory = () => {
        this.props.history.push({
            pathname: `/movies/genre/${this.props.match.params.name}/${this.props.match.params.id}/${this.state.page.toString()}`,
            search: `?sort=${this.state.sort}&include_adult=${this.state.isAdult}&include_video=${this.state.hasVideo}`
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
        let history = Object.fromEntries(new URLSearchParams(this.props.location.search.substring(1)))
        this.setState({
            sort: history.sort,
        })
        this.props.onFetchMovieDiscover(this.state.sort, this.state.isAdult, this.state.hasVideo, this.state.page, this.props.match.params.id);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.id !== prevProps.match.params.id || this.state.sort !== prevState.sort || this.state.isAdult !== prevState.isAdult || this.state.hasVideo !== prevState.hasVideo || this.state.page !== prevState.page) {
            this.props.onFetchMovieDiscover(this.state.sort, this.state.isAdult, this.state.hasVideo, this.state.page, this.props.match.params.id);
            this.pushHistory()
        }
    }

    render() {
        return (
            <div>
                <FilmBanner />
                <FilterBar
                    value={this.state.sort}
                    onChange={this.handleSortChange}
                    includeAdult={this.state.isAdult}
                    onChangeAdult={this.handleAdultChange}
                    includeVideos={this.state.hasVideo}
                    onChangeVideos={this.handleVideoChange}
                />
                <MovieList
                    goForward={this.goForwardHandler}
                    goBack={this.goBackHandler}
                    current={this.state.page}
                />
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