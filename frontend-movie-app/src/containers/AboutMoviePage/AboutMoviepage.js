import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchMovieVideos, FetchMovieDetails, FetchMovieRecommendations, FetchMovieSimilar, FetchMovieReviews, FetchMovieKeywords, FetchMovieCredits, FetchMovieImages } from '../../store/actions/aboutMovie';
import VideoContainer from './VideoContainer/VideoContainer';
import RecommendationSection from './RecommendationSection/RecommendationSection';
import SimilarSection from './SimilarSection/SimilarSection';
import AboutMovie from './AboutMovie/AboutMovie';
import CastSection from './CastSection/CastSection';
import ReviewSection from './ReviewSection/ReviewSection';
import { fetchFavorites } from '../../store/actions/authUser';
import { FetchTVVideos, FetchTVDetails, FetchTVRecommendations, FetchTVSimilar, FetchTVKeywords, FetchTVCredits, FetchTVImages, FetchTVReviews } from '../../store/actions/aboutShow';

class AboutMoviepage extends Component {

    componentDidMount() {
        if (this.props.match.params.type === "movie") {
            this.props.onFetchMovieVideo(this.props.match.params.id)
            this.props.onFetchMovieDetails(this.props.match.params.id)
            this.props.onFetchMovieRecommendations(this.props.match.params.id)
            this.props.onFetchMovieSimilar(this.props.match.params.id)
            this.props.onFetchMovieKeywords(this.props.match.params.id)
            this.props.onFetchMovieReviews(this.props.match.params.id)
            this.props.onFetchMovieCredits(this.props.match.params.id)
            this.props.onFetchMovieImages(this.props.match.params.id)
        } else {
            this.props.onFetchTVVideo(this.props.match.params.id)
            this.props.onFetchTVDetails(this.props.match.params.id)
            this.props.onFetchTVRecommendations(this.props.match.params.id)
            this.props.onFetchTVSimilar(this.props.match.params.id)
            this.props.onFetchTVKeywords(this.props.match.params.id)
            this.props.onFetchTVReviews(this.props.match.params.id)
            this.props.onFetchTVCredits(this.props.match.params.id)
            this.props.onFetchTVImages(this.props.match.params.id)
        }
        this.props.onFetchFavorites()
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.type === "movie") {
            if (this.props.match.params.id !== prevProps.match.params.id || this.props.match.params.type !== prevProps.match.params.type) {
                this.props.onFetchMovieVideo(this.props.match.params.id)
                this.props.onFetchMovieDetails(this.props.match.params.id)
                this.props.onFetchMovieRecommendations(this.props.match.params.id)
                this.props.onFetchMovieSimilar(this.props.match.params.id)
                this.props.onFetchMovieKeywords(this.props.match.params.id)
                this.props.onFetchMovieReviews(this.props.match.params.id)
                this.props.onFetchMovieCredits(this.props.match.params.id)
                this.props.onFetchMovieImages(this.props.match.params.id)
                this.props.onFetchFavorites()
            }
        } else {
            if (this.props.match.params.id !== prevProps.match.params.id || this.props.match.params.type !== prevProps.match.params.type) {
                this.props.onFetchTVVideo(this.props.match.params.id)
                this.props.onFetchTVDetails(this.props.match.params.id)
                this.props.onFetchTVRecommendations(this.props.match.params.id)
                this.props.onFetchTVSimilar(this.props.match.params.id)
                this.props.onFetchTVKeywords(this.props.match.params.id)
                this.props.onFetchTVReviews(this.props.match.params.id)
                this.props.onFetchTVCredits(this.props.match.params.id)
                this.props.onFetchTVImages(this.props.match.params.id)
            }
        }
    }

    render() {
        return (
            <div>
                <VideoContainer />
                <AboutMovie />
                <CastSection />
                <ReviewSection />
                <RecommendationSection />
                <SimilarSection />
            </div>
        );
    };
};

const mapDispatchTopProps = dispatch => {
    return {
        onFetchFavorites: () => dispatch(fetchFavorites()),

        onFetchMovieVideo: (id) => dispatch(FetchMovieVideos(id)),
        onFetchMovieDetails: (id) => dispatch(FetchMovieDetails(id)),
        onFetchMovieRecommendations: (id) => dispatch(FetchMovieRecommendations(id)),
        onFetchMovieSimilar: (id) => dispatch(FetchMovieSimilar(id)),
        onFetchMovieReviews: (id) => dispatch(FetchMovieReviews(id)),
        onFetchMovieCredits: (id) => dispatch(FetchMovieCredits(id)),
        onFetchMovieKeywords: (id) => dispatch(FetchMovieKeywords(id)),
        onFetchMovieImages: (id) => dispatch(FetchMovieImages(id)),

        onFetchTVVideo: (id) => dispatch(FetchTVVideos(id)),
        onFetchTVDetails: (id) => dispatch(FetchTVDetails(id)),
        onFetchTVRecommendations: (id) => dispatch(FetchTVRecommendations(id)),
        onFetchTVSimilar: (id) => dispatch(FetchTVSimilar(id)),
        onFetchTVReviews: (id) => dispatch(FetchTVReviews(id)),
        onFetchTVCredits: (id) => dispatch(FetchTVCredits(id)),
        onFetchTVKeywords: (id) => dispatch(FetchTVKeywords(id)),
        onFetchTVImages: (id) => dispatch(FetchTVImages(id)),
    };
};

export default connect(null, mapDispatchTopProps)(AboutMoviepage)