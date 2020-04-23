import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilmBanner from '../../components/FilmBanner/FilmBanner';
import {
    FetchTVDiscover
} from '../../store/actions/tv';
import ShowList from './ShowList/ShowList';

class Showpage extends Component {
    componentDidMount() {
        this.props.onFetchTVDiscover("popularity.desc", true, true, 1, this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.onFetchTVDiscover("popularity.desc", true, true, 1, this.props.match.params.id)
        }
    }

    render() {
        return (
            <div>
                <FilmBanner />
                <ShowList />
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