import React, { Component } from 'react';
import { fetchMovieSearch } from '../../store/actions/movie';
import { fetchTVSearch } from '../../store/actions/tv';
import { connect } from 'react-redux';

class Searchpage extends Component {
    
    componentDidMount() {
        if (this.props.type === "movie") {
            // this.props.onFetchMovieSearchResults()
        } else {
            // this.props.onFetchShowSearchResults()
        }
    }

    render() {
        return (
            <div>

            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        type: state.typeOfFilm.typeOfFilm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovieSearchResults: (query, page) => dispatch(fetchMovieSearch(query, page)),
        onFetchShowSearchResults: (query, page) => dispatch(fetchTVSearch(query, page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchpage);