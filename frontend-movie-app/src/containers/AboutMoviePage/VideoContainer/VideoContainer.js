import React from 'react';
import { useSelector } from 'react-redux';
import classes from './VideoContainer.module.css';
import AboutMovie from '../AboutMovie/AboutMovie';

export default function VideoContainer() {
    const loadVideo = useSelector(state => state.movieVideos.loading)
    const videos = useSelector(state => state.movieVideos.videos)
    return (
        <div className={classes.VideoContainer} >
            {loadVideo ? null :
                <div className={classes.Video}>
                    <iframe src={`https://www.youtube.com/embed/${videos.results[0].key}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <AboutMovie />
                </div>
            }
        </div >
    );
};

