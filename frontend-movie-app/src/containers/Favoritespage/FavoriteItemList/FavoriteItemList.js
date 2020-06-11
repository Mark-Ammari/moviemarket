import React, { useContext, useEffect } from 'react';
import classes from './FavoriteItemList.module.css';
import { NavLink, useHistory } from 'react-router-dom';
import auth from '../../../context/context';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFavorites, removeFromFavorites } from '../../../store/actions/authUser';
import FavoritedItem from '../FavoritedItem/FavoritedItem';

export default function FavoriteItemList() {
    const authContext = useContext(auth).isAuth
    const getFavorites = useSelector(state => state.favorites.favorites)
    const loadFavorites = useSelector(state => state.favorites.loading)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(fetchFavorites())
    }, [dispatch])

    function openNewLink(type, name, itemid) {
        history.push({
            pathname: `/${type}/${name}/${itemid}`
        })
    }

    function removeItem(itemID) {
        dispatch(removeFromFavorites(itemID))
    }

    return (
        <section className={classes.FavoriteItemList}>
            {!authContext ?
                <div className={classes.FavoritesListMessage}>
                    <h1>Must be Signed in to see Favorites.</h1>
                    <p>In order to add movies and tv series to your favorites. you must be <NavLink className={classes.NavLink} to="/account/auth">signed in.</NavLink></p>
                </div>
                :
                <div className={classes.FavoritesContainer}>
                    <h1>My Favorites</h1>
                    {
                        loadFavorites ? null :
                            getFavorites.favorites.length === 0 ?
                                <div className={classes.FavoritesListMessage}>
                                    <h1>Your Favorites is Empty.</h1>
                                    <p>You haven't saved any items to your favorites yet. Start searching and add your items to your favorites.</p>
                                </div>
                                :
                                <div className={classes.FavoriteItem}>
                                    {getFavorites.favorites.map((item) => {
                                        return <FavoritedItem
                                            key={item.id}
                                            title={item["name"] || item.title || item.title["original_name"]}
                                            onRemove={() => removeItem(item.id)}
                                            to={() => openNewLink(item["type_of"], item["name"] || item.title || item.title["original_name"], item.id)}
                                            subheader={item["first_air_date"] || item["release_date"]}
                                            src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                                        />
                                    })}
                                </div>
                    }
                </div>
            }
        </section >
    )
}

