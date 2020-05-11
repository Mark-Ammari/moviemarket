import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilmBanner from '../../components/FilmBanner/FilmBanner';
import {
    FetchTVDiscover
} from '../../store/actions/tv';
import ShowList from './ShowList/ShowList';
import PaginateList from '../../components/PaginateList/PaginateList';

class Showpage extends Component {
    state = {
        page: parseInt(this.props.match.params.page)
    }

    pushHistory = () => {
        this.props.history.push({
            pathname: `/shows/genre/${this.props.match.params.name}/${this.props.match.params.id}/${this.state.page.toString()}`,
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
        this.props.onFetchTVDiscover("popularity.desc", true, true, this.state.page, this.props.match.params.id);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.id !== prevProps.match.params.id || this.state.page !== prevState.page) {
            this.props.onFetchTVDiscover("popularity.desc", true, true, this.state.page, this.props.match.params.id)
            this.pushHistory()
        }
    }

    render() {
        return (
            <div>
                <FilmBanner />
                <ShowList
                    goBack={this.goBackHandler}
                    goForward={this.goForwardHandler}
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