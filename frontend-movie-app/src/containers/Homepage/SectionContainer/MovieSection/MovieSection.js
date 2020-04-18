import React, { Component } from 'react';
import classes from './MovieSection.module.css';
import { connect } from 'react-redux';
import FilmSection from '../FilmSection/FilmSection';
import BackdropCard from '../../../../components/Cards/BackdropCard/BackdropCard';

class MovieSection extends Component {
    render() {
        return (
            <div className={classes.MovieSection}>
                <FilmSection
                    heading="Popular Movies"
                    title="Latest Popular Movies"
                    subtitle="List of popular movies updated daily."
                >
                    {this.props.loadMoviePopular ? null :
                        this.props.moviePopular.results.map((popular, key) => {
                            return <BackdropCard
                                isSrc={popular.backdrop_path}
                                key={key}
                                id={popular.id}
                                type="movie"
                                src={`https://image.tmdb.org/t/p/original${popular.backdrop_path}`}
                                title={popular.name || popular.title || popular["original_title"]}
                            />
                        })
                    }
                </FilmSection>
                <FilmSection
                    heading="Top Rated Movies"
                    title="Latest Top Rated Movies"
                    subtitle="List of Top Rated movies updated daily."
                >
                    {this.props.loadMovieTopRated ? null :
                        this.props.movieTopRated.results.map((topRated, key) => {
                            return <BackdropCard
                                isSrc={topRated.backdrop_path}
                                key={key}
                                id={topRated.id}
                                type="movie"
                                src={`https://image.tmdb.org/t/p/original${topRated.backdrop_path}`}
                                title={topRated.name || topRated.title || topRated["original_title"]}
                            />
                        })
                    }
                </FilmSection>
                <FilmSection
                    heading="Movies Now Playing"
                    title="Latest Movies In Theaters"
                    subtitle="List of movies playing in the movie theatres."
                >
                    {this.props.loadMovieNowPlaying ? null :
                        this.props.movieNowPlaying.results.map((nowPlaying, key) => {
                            return <BackdropCard
                                isSrc={nowPlaying.backdrop_path}
                                id={nowPlaying.id}
                                key={key}
                                type="movie"
                                src={`https://image.tmdb.org/t/p/original${nowPlaying.backdrop_path}`}
                                title={nowPlaying.name || nowPlaying.title || nowPlaying["original_title"]}
                            />
                        })
                    }
                </FilmSection>
                <FilmSection
                    heading="Upcoming Movies"
                    title="Movies Coming Soon"
                    subtitle="List of upcoming movies in theatres."
                >
                    {this.props.loadMovieUpcoming ? null :
                        this.props.movieUpcoming.results.map((upcoming, key) => {
                            return <BackdropCard
                                isSrc={upcoming.backdrop_path}
                                key={key}
                                id={upcoming.id}
                                type="movie"
                                src={`https://image.tmdb.org/t/p/original${upcoming.backdrop_path}`}
                                title={upcoming.name || upcoming.title || upcoming["original_title"]}
                            />
                        })
                    }
                </FilmSection>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        loadMoviePopular: state.moviePopular.loading,
        moviePopular: state.moviePopular.popular,

        loadMovieTopRated: state.movieTopRated.loading,
        movieTopRated: state.movieTopRated.topRated,

        loadMovieNowPlaying: state.movieNowPlaying.loading,
        movieNowPlaying: state.movieNowPlaying.nowPlaying,

        loadMovieUpcoming: state.movieUpcoming.loading,
        movieUpcoming: state.movieUpcoming.upcoming
    }
}

export default connect(mapStateToProps)(MovieSection);