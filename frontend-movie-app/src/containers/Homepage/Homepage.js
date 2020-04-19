import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieBackdrop from './MovieBackdropContainer/MovieBackdrop/MovieBackdrop';
import classes from './Homepage.module.css';
import MovieSection from './SectionContainer/MovieSection/MovieSection';
import TabletPanel from './TabletPanel/TabletPanel';
import TVSection from './SectionContainer/TVSection/TVSection';
import LoadMovieBackdrop from './MovieBackdropContainer/LoadMovieBackdrop/LoadMovieBackdrop';
import LoadMiniStepper from './MovieBackdropContainer/LoadMiniStepper/LoadMiniStepper';
import {
    FetchMovieNowPlaying,
    FetchMoviePopular,
    FetchMovieTopRated,
    FetchMovieUpcoming
} from '../../store/actions/movie';
import {
    FetchTVAiringToday,
    FetchTVPopular,
    FetchTVTopRated,
    FetchTVOnTheAir,
} from '../../store/actions/tv';
import FetchTrending from '../../store/actions/trending';

class Homepage extends Component {
    componentDidMount() {
        this.props.onFetchTrending()
        this.props.onFetchMovieNowPlaying()
        this.props.onFetchMoviePopular()
        this.props.onFetchMovieTopRated()
        this.props.onFetchMovieUpcoming()
        this.props.onFetchTVAiringToday()
        this.props.onFetchTVOnTheAir()
        this.props.onFetchTVPopular()
        this.props.onFetchTVTopRated()
    }
    render() {
        return (
            <div className={classes.Homepage}>
                {this.props.loadTrending ?
                    <>
                        <LoadMovieBackdrop />
                        <LoadMiniStepper />
                    </>
                    :
                    <MovieBackdrop />
                }
                <TabletPanel
                    movieSection={
                        <MovieSection />
                    }
                    showSection={
                        <TVSection />
                    }
                />
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        loadTrending: state.trending.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchTrending: () => dispatch(FetchTrending()),
        onFetchMovieNowPlaying: () => dispatch(FetchMovieNowPlaying()),
        onFetchMoviePopular: () => dispatch(FetchMoviePopular()),
        onFetchMovieTopRated: () => dispatch(FetchMovieTopRated()),
        onFetchMovieUpcoming: () => dispatch(FetchMovieUpcoming()),
        onFetchTVAiringToday: () => dispatch(FetchTVAiringToday()),
        onFetchTVOnTheAir: () => dispatch(FetchTVOnTheAir()),
        onFetchTVPopular: () => dispatch(FetchTVPopular()),
        onFetchTVTopRated: () => dispatch(FetchTVTopRated()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);