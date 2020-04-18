import React, { Component } from 'react';
import classes from './TVSection.module.css';
import { connect } from 'react-redux';
import FilmSection from '../FilmSection/FilmSection';
import BackdropCard from '../../../../components/Cards/BackdropCard/BackdropCard';

class TVSection extends Component {
    render() {
        return (
            <div className={classes.TVSection}>
                <FilmSection
                    heading="Popular TV Shows"
                    title="Latest TV Shows"
                    subtitle="List of popular TV Shows updated daily."
                >
                    {this.props.loadTVPopular ? null :
                        this.props.tvPopular.results.map((popular, key) => {
                            return <BackdropCard
                                isSrc={popular.backdrop_path}
                                key={key}
                                type="show"
                                id={popular.id}
                                src={`https://image.tmdb.org/t/p/original${popular.backdrop_path}`}
                                title={popular.name || popular.title || popular["original_title"]}
                            />
                        })
                    }
                </FilmSection>
                <FilmSection
                    heading="Top Rated TV Shows"
                    title="Latest Top Rated TV Shows"
                    subtitle="List of Top Rated TV Shows updated daily."
                >
                    {this.props.loadTVTopRated ? null :
                        this.props.tvTopRated.results.map((topRated, key) => {
                            return <BackdropCard
                                isSrc={topRated.backdrop_path}
                                key={key}
                                type="show"
                                id={topRated.id}
                                src={`https://image.tmdb.org/t/p/original${topRated.backdrop_path}`}
                                title={topRated.name || topRated.title || topRated["original_title"]}
                            />
                        })
                    }
                </FilmSection>
                <FilmSection
                    heading="Movies Airing Today"
                    title="Latest TV Shows Airing Today"
                    subtitle="List of TV Shows playing today."
                >
                    {this.props.loadTVAiringToday ? null :
                        this.props.tvAiringToday.results.map((airingToday, key) => {
                            return <BackdropCard
                                isSrc={airingToday.backdrop_path}
                                id={airingToday.id}
                                key={key}
                                type="show"
                                src={`https://image.tmdb.org/t/p/original${airingToday.backdrop_path}`}
                                title={airingToday.name || airingToday.title || airingToday["original_title"]}
                            />
                        })
                    }
                </FilmSection>
                <FilmSection
                    heading="TV Shows On The Air"
                    title="Upcomming Shows For The Next 7 Days"
                    subtitle="List of TV Shows currently on the air."
                >
                    {this.props.loadTVOnTheAir ? null :
                        this.props.tvOnTheAir.results.map((onTheAir, key) => {
                            return <BackdropCard
                                isSrc={onTheAir.backdrop_path}
                                key={key}
                                id={onTheAir.id}
                                type="show"
                                src={`https://image.tmdb.org/t/p/original${onTheAir.backdrop_path}`}
                                title={onTheAir.name || onTheAir.title || onTheAir["original_title"]}
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
        loadTVPopular: state.tvPopular.loading,
        tvPopular: state.tvPopular.popular,

        loadTVTopRated: state.tvTopRated.loading,
        tvTopRated: state.tvTopRated.topRated,

        loadTVOnTheAir: state.tvOnTheAir.loading,
        tvOnTheAir: state.tvOnTheAir.onTheAir,

        loadTVAiringToday: state.tvAiringToday.loading,
        tvAiringToday: state.tvAiringToday.airingToday
    }
}

export default connect(mapStateToProps)(TVSection);