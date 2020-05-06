import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchMovieVideos, FetchMovieDetails, FetchMovieRecommendations, FetchMovieSimilar, FetchMovieReviews, FetchMovieKeywords } from '../../store/actions/aboutMovie';
import VideoContainer from './VideoContainer/VideoContainer';
import RecommendationSection from './RecommendationSection/RecommendationSection';
import SimilarSection from './SimilarSection/SimilarSection';
import AboutMovie from './AboutMovie/AboutMovie';

class AboutMoviepage extends Component {

    componentDidMount() {
        this.props.onFetchMovieVideo(this.props.match.params.id)
        this.props.onFetchMovieDetails(this.props.match.params.id)
        this.props.onFetchMovieRecommendations(this.props.match.params.id)
        this.props.onFetchMovieSimilar(this.props.match.params.id)
        this.props.onFetchMovieKeywords(this.props.match.params.id)
        this.props.onFetchMovieReviews(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <VideoContainer />
                <AboutMovie />
                <RecommendationSection />
                <SimilarSection />
            </div>
        );
    };
};

const mapDispatchTopProps = dispatch => {
    return {
        onFetchMovieVideo: (id) => dispatch(FetchMovieVideos(id)),
        onFetchMovieDetails: (id) => dispatch(FetchMovieDetails(id)),
        onFetchMovieRecommendations: (id) => dispatch(FetchMovieRecommendations(id)),
        onFetchMovieSimilar: (id) => dispatch(FetchMovieSimilar(id)),
        onFetchMovieReviews: (id) => dispatch(FetchMovieReviews(id)),
        onFetchMovieKeywords: (id) => dispatch(FetchMovieKeywords(id))
    };
};

export default connect(null, mapDispatchTopProps)(AboutMoviepage);