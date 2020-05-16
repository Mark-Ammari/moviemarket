import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilmBanner from '../../components/FilmBanner/FilmBanner';
import { FetchTVDiscover } from '../../store/actions/tv';
import ShowList from './ShowList/ShowList';
import FilterBar from '../../components/FilterBar/FilterBar';

class Showpage extends Component {
    state = {
        page: parseInt(this.props.match.params.page),
        sort: this.props.location.search.slice(6)
    }

    handleSortChange = (event) => {
        this.setState({ sort: event.target.value });
    };

    pushHistory = () => {
        this.props.history.push({
            pathname: `/shows/genre/${this.props.match.params.name}/${this.props.match.params.id}/${this.state.page.toString()}`,
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
        this.props.onFetchTVDiscover(this.state.sort, true, true, this.state.page, this.props.match.params.id);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.id !== prevProps.match.params.id || this.state.sort !== prevState.sort || this.state.page !== prevState.page) {
            this.props.onFetchTVDiscover(this.state.sort, true, true, this.state.page, this.props.match.params.id);
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
                <ShowList
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
        onFetchTVDiscover: (sortBy, includeAdult, includeVideo, page, withGenres) => dispatch(FetchTVDiscover(sortBy, includeAdult, includeVideo, page, withGenres)),
    }
}

export default connect(null, mapDispatchToProps)(Showpage);