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
                    {this.props.loadPopular ? null :
                        this.props.popular.results.map((popular, key) => {
                            return <BackdropCard
                                isSrc={popular.backdrop_path}
                                key={key}
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
                    {this.props.loadTopRated ? null :
                        this.props.topRated.results.map((topRated, key) => {
                            console.log(topRated)
                            return <BackdropCard
                                isSrc={topRated.backdrop_path}
                                key={key}
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
                    {this.props.loadNowPlaying ? null :
                        this.props.nowPlaying.results.map((nowPlaying, key) => {
                            return <BackdropCard
                                isSrc={nowPlaying.backdrop_path}
                                key={key}
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
                    {this.props.loadUpcoming ? null :
                        this.props.upcoming.results.map((upcoming, key) => {
                            return <BackdropCard
                                isSrc={upcoming.backdrop_path}
                                key={key}
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
        loadPopular: state.popular.loading,
        popular: state.popular.popular,

        loadTopRated: state.topRated.loading,
        topRated: state.topRated.topRated,

        loadNowPlaying: state.nowPlaying.loading,
        nowPlaying: state.nowPlaying.nowPlaying,

        loadUpcoming: state.upcoming.loading,
        upcoming: state.upcoming.upcoming
    }
}

export default connect(mapStateToProps)(MovieSection);