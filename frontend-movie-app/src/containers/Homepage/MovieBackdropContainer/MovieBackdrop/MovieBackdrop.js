import React, { useState } from 'react';
import classes from './MovieBackdrop.module.css';
import CarouselPointers from '../CarouselPointers/CarouselPointers';
import { useSelector } from 'react-redux';
import MovieBackdropOverlay from '../MovieBackdropOverlay/MovieBackdropOverlay';
import MiniStepper from '../MiniStepper/MiniStepper';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';

const variantSlide = {
    enter: (direction) => {
        return {
            x: direction > 0 ? -2000 : 2000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 2000 : -2000,
            opacity: 0
        };
    }
};

export default function MovieBackdrop() {

    const [[page, direction], setPage] = useState([0, 0]);
    const trending = useSelector(state => state.trending.trending)

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    const imageIndex = wrap(0, trending.results.length, page)

    return (
        <div className={classes.MovieBackdrop}>
            <div className={classes.ImagesContainer}>
                <div id="fadeMovieBackdrop" className={classes.MoviePosterImage}>
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={page}
                            src={`https://image.tmdb.org/t/p/original${trending.results[imageIndex].poster_path}`}
                            alt="backdrop"
                            variants={variantSlide}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 200 },
                                opacity: { duration: 0.2 },
                            }}
                        />
                    </AnimatePresence>
                </div>
                <div id="fadeMovieBackdrop" className={classes.MovieBackdropImage}>
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={page}
                            src={`https://image.tmdb.org/t/p/original${trending.results[imageIndex].backdrop_path}`}
                            alt="backdrop"
                            variants={variantSlide}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 200 },
                                opacity: { duration: 0.2 },
                            }}
                        />

                    </AnimatePresence>
                </div>
                <motion.div
                    key={page}
                    className={classes.Filter}
                    variants={variantSlide}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 200 },
                        opacity: { duration: 0.2 },
                    }}
                ></motion.div>
                <MovieBackdropOverlay
                    name={trending.results[imageIndex].name || trending.results[imageIndex].title}
                    rating={trending.results[imageIndex].vote_average}
                    description={trending.results[imageIndex].overview}
                />
                <CarouselPointers rightClick={() => paginate(1)} leftClick={() => paginate(-1)} />
            </div>
            <MiniStepper pointer={imageIndex} steps={trending.results.length} />
        </div>
    );
};

