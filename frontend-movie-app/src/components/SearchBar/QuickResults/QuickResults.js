import React from 'react';
import classes from './QuickResults.module.css';
import { Paper, List, ListItem, ListItemText, ClickAwayListener } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Loader from '../../Loader/Loader';
import { useHistory } from 'react-router-dom';

export default function QuickResults({ type, show, onClickAway }) {
    const searchMovie = useSelector(state => state.movieSearch.search)
    const loadMovieSearch = useSelector(state => state.movieSearch.loading)
    const loadShowSearch = useSelector(state => state.tvSearch.loading)
    const searchShow = useSelector(state => state.tvSearch.search)
    const history = useHistory()

    function linkToFilm(typeOf, title, id) {
        history.push({
            pathname: `/${typeOf}/${title.split(" ").join("-").toLowerCase()}/${id}`
        })
        onClickAway()
    }

    return (
        <ClickAwayListener onClickAway={onClickAway}>
            <Paper className={[classes.QuickResults, show ? classes.QuickResultsNone : ""].join(' ')}>
                {type === "movie" ?
                    loadMovieSearch ? <Loader /> :
                        searchMovie.results.length === 0 ?
                            <div className={classes.NoSearchFound}>
                                <p>No Results Found.</p>
                            </div>
                            :
                            <List>
                                {searchMovie.results.slice(0, 3).map(movie => {
                                    return <ListItem button onClick={() => linkToFilm("movie", movie.title || movie["original_name"], movie.id)}>
                                        <ListItemText primary={movie.title || movie["original_title"]} />
                                    </ListItem>
                                })}
                            </List>
                    :
                    loadShowSearch ? <Loader /> :
                        searchShow.results.length === 0 ?
                            <div className={classes.NoSearchFound}>
                                <p>No Results Found.</p>
                            </div>
                            :
                            <List>
                                {searchShow.results.slice(0, 3).map(show => {
                                    return <ListItem button onClick={() => linkToFilm("show", show.title || show["original_name"], show.id)}>
                                        <ListItemText primary={show.title || show["original_title"] || show["original_name"]} />
                                    </ListItem>
                                })}
                            </List>
                }
            </Paper>
        </ClickAwayListener>

    )
}

