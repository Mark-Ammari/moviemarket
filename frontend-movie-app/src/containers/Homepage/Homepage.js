import React, { Component } from 'react';
import FetchTrending from '../../store/actions/trending';
import { connect } from 'react-redux';
import MovieBackdrop from './MovieBackdropContainer/MovieBackdrop/MovieBackdrop';
import FilmSection from './SectionContainer/FilmSection/FilmSection';
import {
    FetchMovieNowPlaying,
    FetchMoviePopular,
    FetchMovieTopRated,
    FetchMovieUpcoming
} from '../../store/actions/movie';
import classes from './Homepage.module.css';

class Homepage extends Component {

    componentDidMount() {
        this.props.onFetchTrending()
        this.props.onFetchNowPlaying()
        this.props.onFetchPopular()
        this.props.onFetchTopRated()
        this.props.onFetchUpcoming()
    }

    render() {
        return (
            <div className={classes.Homepage}>
                {this.props.loading ? null :
                    <MovieBackdrop />
                }
                <FilmSection 
                    heading="Popular Movies"
                    title="Latest Popular Movies"
                    subtitle="List of popular movies updated daily."
                >

                </FilmSection>
                <FilmSection 
                    heading="Top Rated Movies"
                    title="Latest Top Rated Movies"
                    subtitle="List of Top Rated movies updated daily."
                >

                </FilmSection>
                <FilmSection 
                    heading="Movies Now Playing"
                    title="Latest Movies In Theaters"
                    subtitle="List of movies playing in the movie theatres."
                >

                </FilmSection>
                <FilmSection 
                    heading="Upcoming Movies"
                    title="Movies Coming Soon"
                    subtitle="List of upcoming movies in theatres."
                >

                </FilmSection>
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
        onFetchTrending: () => dispatch(FetchTrending()),
        onFetchNowPlaying: () => dispatch(FetchMovieNowPlaying()),
        onFetchPopular: () => dispatch(FetchMoviePopular()),
        onFetchTopRated: () => dispatch(FetchMovieTopRated()),
        onFetchUpcoming: () => dispatch(FetchMovieUpcoming())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);