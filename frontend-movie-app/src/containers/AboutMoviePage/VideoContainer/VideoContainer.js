import React from 'react';
import { useSelector } from 'react-redux';
import classes from './VideoContainer.module.css';
import LoadSkeletonVideo from './LoadSkeletonVideo/LoadSkeletonVideo';
import ErrorWrapper from '../../../components/ErrorWrapper/ErrorWrapper';
import EmptyListWrapper from '../../../components/EmptyListWrapper/EmptyListWrapper';
import { useParams } from 'react-router-dom';

export default function VideoContainer() {
    const { type } = useParams()
    return (
        <div>
            { type === "movie" ?
                <MovieVideoContainer />
                :
                <TVVideoContainer />
            }
        </div>
    );
};

const MovieVideoContainer = () => {
    const loadVideo = useSelector(state => state.movieVideos.loading)
    const videos = useSelector(state => state.movieVideos.videos)
    const error = useSelector(state => state.movieVideos.error)
    return (
        <div className={classes.VideoContainer} >
            {loadVideo ?
                <LoadSkeletonVideo />
                :
                error ? <ErrorWrapper width="560px" height="315px" />
                    :
                    videos.results.length === 0 ?
                    <EmptyListWrapper width="560px" height={315} />
                    :
                    <div className={classes.Video}>
                        <iframe title="VideoPlayer" src={`https://www.youtube.com/embed/${videos.results[0].key}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
            }
        </div >
    );
}

const TVVideoContainer = () => {
    const loadVideo = useSelector(state => state.tvVideos.loading)
    const videos = useSelector(state => state.tvVideos.videos)
    const error = useSelector(state => state.tvVideos.error)
    return (
        <div className={classes.VideoContainer} >
            {loadVideo ?
                <LoadSkeletonVideo />
                :
                error ? <ErrorWrapper width="560px" height="315px" />
                    :
                    videos.results.length === 0 ?
                    <EmptyListWrapper width="560px" height={315} />
                    :
                    <div className={classes.Video}>
                        <iframe title="VideoPlayer" src={`https://www.youtube.com/embed/${videos.results[0].key}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
            }
        </div >
    );
}

