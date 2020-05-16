import React, { Component } from 'react';
import { FetchMovieDiscover } from '../../store/actions/movie';
import { connect } from 'react-redux';
import FilmBanner from '../../components/FilmBanner/FilmBanner';
import MovieList from './MovieList/MovieList';
import FilterBar from '../../components/FilterBar/FilterBar';

class Moviepage extends Component {
    state = {
        page: parseInt(this.props.match.params.page),
        sort: this.props.location.search.slice(6)
    }

    handleSortChange = (event) => {
        this.setState({ sort: event.target.value });
    };

    pushHistory = () => {
        this.props.history.push({
            pathname: `/movies/genre/${this.props.match.params.name}/${this.props.match.params.id}/${this.state.page.toString()}`,
            search: `?sort=${this.state.sort}`
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
        this.props.onFetchMovieDiscover(this.state.sort, true, true, this.state.page, this.props.match.params.id);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.id !== prevProps.match.params.id || this.state.sort !== prevState.sort || this.state.page !== prevState.page) {
            this.props.onFetchMovieDiscover(this.state.sort, true, true, this.state.page, this.props.match.params.id);
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