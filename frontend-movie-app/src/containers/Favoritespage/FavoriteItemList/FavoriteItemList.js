import React, { useContext, useEffect } from 'react';
import classes from './FavoriteItemList.module.css';
import { NavLink } from 'react-router-dom';
import auth from '../../../context/context';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFavorites } from '../../../store/actions/authUser';

export default function FavoriteItemList() {
    const authContext = useContext(auth).isAuth
    const getFavorites = useSelector(state => state.favorites.favorites)
    const dispatch = useDispatch()

    useEffect(() => {
        if (authContext) {
            dispatch(fetchFavorites())
        }
    }, [authContext, dispatch])

    return (
        <section className={classes.FavoriteItemList}>
            {!authContext ?
                <div className={classes.FavoritesListMessage}>
                    <h1>Must be Signed in to see Favorites.</h1>
                    <p>In order to add movies and tv series to your favorites. you must be <NavLink className={classes.NavLink} to="/account/auth">signed in.</NavLink></p>
                </div>
                :
                getFavorites.favorites.length === 0 ?
                <div className={classes.FavoritesListMessage}>
                    <h1>Your Favorites is Empty.</h1>
                    <p>You haven't saved any items to your favorites yet. Start searching and add your items to your favorites.</p>
                </div>
                :
                <p>got items</p>
            }
        </section>
    )
}

