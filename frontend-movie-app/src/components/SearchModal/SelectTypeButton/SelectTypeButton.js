import React, { forwardRef } from 'react';
import classes from './SelectTypeButton.module.css';
import { MovieRounded, TvRounded, SearchRounded } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { setTypeMovie, setTypeShow } from '../../../store/actions/trending';
import { Paper, Button } from '@material-ui/core';

const SelectTypeButton = forwardRef(({...props}, ref) => {
    const selectType = useSelector(state => state.typeOfFilm.typeOfFilm)
    const dispatch = useDispatch()

    const handleMovieType = () => {
        dispatch(setTypeMovie())
    }
    const handleShowType = () => {
        dispatch(setTypeShow())
    }
    return (
        <div className={classes.SelectTypeButtonContainer}>
            <div onClick={handleMovieType} className={[classes.SelectTypeMovie, selectType === "movie" ? classes.Active : null].join(" ")}><MovieRounded /></div>
            <div onClick={handleShowType} className={[classes.SelectTypeShow, selectType === "show" ? classes.Active : null].join(" ")}><TvRounded /></div>
            <Paper className={classes.InputWrapper}>
                <input
                    placeholder="Search for Films"
                    ref={ref}
                    {...props}
                />
                <Button type="submit"
                    className={classes.iconButton} aria-label="search">
                    <SearchRounded />
                </Button>
            </Paper>
        </div>
    )
})

export default SelectTypeButton;