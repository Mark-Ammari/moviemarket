import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchTVVideos, FetchTVDetails, FetchTVRecommendations, FetchTVSimilar, FetchTVReviews, FetchTVKeywords, FetchTVCredits, FetchTVImages } from '../../store/actions/aboutShow';
// import VideoContainer from './VideoContainer/VideoContainer';
// import RecommendationSection from './RecommendationSection/RecommendationSection';
// import SimilarSection from './SimilarSection/SimilarSection';
// import AboutMovie from './AboutMovie/AboutMovie';
// import CastSection from './CastSection/CastSection';
// import ReviewSection from './ReviewSection/ReviewSection';

class AboutShowpage extends Component {

    componentDidMount() {
        this.props.onFetchTVVideo(this.props.match.params.id)
        this.props.onFetchTVDetails(this.props.match.params.id)
        this.props.onFetchTVRecommendations(this.props.match.params.id)
        this.props.onFetchTVSimilar(this.props.match.params.id)
        this.props.onFetchTVKeywords(this.props.match.params.id)
        this.props.onFetchTVReviews(this.props.match.params.id)
        this.props.onFetchTVCredits(this.props.match.params.id)
        this.props.onFetchTVImages(this.props.match.params.id)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
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
        onFetchTVVideo: (id) => dispatch(FetchTVVideos(id)),
        onFetchTVDetails: (id) => dispatch(FetchTVDetails(id)),
        onFetchTVRecommendations: (id) => dispatch(FetchTVRecommendations(id)),
        onFetchTVSimilar: (id) => dispatch(FetchTVSimilar(id)),
        onFetchTVReviews: (id) => dispatch(FetchTVReviews(id)),
        onFetchTVCredits: (id) => dispatch(FetchTVCredits(id)),
        onFetchTVKeywords: (id) => dispatch(FetchTVKeywords(id)),
        onFetchTVImages: (id) => dispatch(FetchTVImages(id))
    };
};

export default connect(null, mapDispatchTopProps)(AboutShowpage);