import React, { Component } from 'react';
import FetchTrending from '../../store/actions/trending';
import { connect } from 'react-redux';
import MovieBackdrop from './MovieBackdrop/MovieBackdrop';

class Homepage extends Component {

    componentDidMount() {
        this.props.onFetchTrending()
    }

    render() {
        return (
            <div>
                {this.props.loading ? null :
                    <MovieBackdrop />
                }
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        loading: state.trending.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchTrending: () => dispatch(FetchTrending())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);