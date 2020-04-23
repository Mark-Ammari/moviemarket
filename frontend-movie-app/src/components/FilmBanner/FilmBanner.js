import React from 'react';
import classes from './FilmBanner.module.css';

export default function FilmBanner() {
    return <div className={classes.FilmBannerContainer}>
        <div className={classes.FilmBanner}>
            <div className={classes.FilmBannerText}>
                <h1>MovieMarket</h1>
                <h2>Watch Hollywood hits and TV favorites</h2>
                <p>Free on MovieMarket and Fire TV devices</p>
                <p>By viewing content on MovieMarket TV, you agree to the IMDb Conditions of Use.</p>
            </div>
        </div>
    </div>
}