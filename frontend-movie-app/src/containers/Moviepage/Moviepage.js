import React, { Component } from 'react';
import { FetchMovieDiscover } from '../../store/actions/movie';
import { connect } from 'react-redux';
import FilmBanner from '../../components/FilmBanner/FilmBanner';
import MovieList from './MovieList/MovieList';
import FilterBar from '../../components/FilterBar/FilterBar';
import { FetchTVDiscover } from '../../store/actions/tv';

class Moviepage extends Component {
    state = {
        page: parseInt(this.props.match.params.page),
        sort: this.props.location.search.slice(6)
    }

    handleSortChange = (event) => {
        this.setState({ sort: event.target.value });
    };

    pushHistory = () => {
        if (this.props.match.params.type === "movies") {
            this.props.history.push({
                pathname: `/movies/genre/${this.props.match.params.name}/${this.props.match.params.id}/${this.state.page.toString()}`,
                search: `?sort=${this.state.sort}`
            })
        } else {
            this.props.history.push({
                pathname: `/shows/genre/${this.props.match.params.name}/${this.props.match.params.id}/${this.state.page.toString()}`,
                search: `?sort=${this.state.sort}`
            })
        }
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
        if (this.props.match.params.type === "movies") {
            this.props.onFetchMovieDiscover(this.state.sort, true, true, this.state.page, this.props.match.params.id);
        } else {
            this.props.onFetchTVDiscover(this.state.sort, true, true, this.state.page, this.props.match.params.id);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.type === "movies") {
            if (this.props.match.params.id !== prevProps.match.params.id || this.state.sort !== prevState.sort || this.state.page !== prevState.page || this.props.match.params.type !== prevProps.match.params.type) {
                this.props.onFetchMovieDiscover(this.state.sort, true, true, this.state.page, this.props.match.params.id);
                this.pushHistory()
            }
        } else {
            if (this.props.match.params.id !== prevProps.match.params.id || this.state.sort !== prevState.sort || this.state.page !== prevState.page || this.props.match.params.type !== prevProps.match.params.type) {
                this.props.onFetchTVDiscover(this.state.sort, true, true, this.state.page, this.props.match.params.id);
                this.pushHistory()
            }
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
        onFetchTVDiscover: (sortBy, includeAdult, includeVideo, page, withGenres) => dispatch(FetchTVDiscover(sortBy, includeAdult, includeVideo, page, withGenres)),
    }
}

export default connect(null, mapDispatchToProps)(Moviepage);