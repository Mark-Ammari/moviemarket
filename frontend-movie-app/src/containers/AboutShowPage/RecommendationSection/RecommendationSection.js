import React from 'react';
import { useSelector } from 'react-redux';
import classes from './RecommendationSection.module.css';
import FilmSection from '../../../components/FilmSection/FilmSection';
import LoadSkeletonBackdropCard from '../../../components/Cards/LoadSkeletonBackdropCard/LoadSkeletonBackdropCard';
import ErrorWrapper from '../../../components/ErrorWrapper/ErrorWrapper';
import BackdropCard from '../../../components/Cards/BackdropCard/BackdropCard';
import EmptyListWrapper from '../../../components/EmptyListWrapper/EmptyListWrapper';

export default function RecommendationSection() {
    const loadRecommendations = useSelector(state => state.tvRecommendations.loading)
    const recommendations = useSelector(state => state.tvRecommendations.recommendations)
    const error = useSelector(state => state.tvRecommendations.error)
    const fillerLoadItems = [1, 2, 3, 4, 5]
    return (
        <div className={classes.RecommendationSection} >
            <FilmSection
                // heading="Recommended Movies"
                title="Recommended Shows"
                subtitle="Shows Recommended By Users."
            >
                {loadRecommendations ?
                    fillerLoadItems.map((load, key) => {
                        return <LoadSkeletonBackdropCard key={key} />
                    })
                    :
                    error ? <ErrorWrapper width="1366px" height={215} /> :
                        recommendations.results.length === 0 ? <EmptyListWrapper width="1366px" height={215} />
                            :
                            recommendations.results.map((recommendations, key) => {
                                return <BackdropCard
                                    isSrc={recommendations.backdrop_path}
                                    key={key}
                                    id={recommendations.id}
                                    type="show"
                                    src={`https://image.tmdb.org/t/p/original${recommendations.backdrop_path}`}
                                    title={recommendations.name || recommendations.title || recommendations["original_title"]}
                                />
                            })
                }
            </FilmSection>
        </div >
    );
};

