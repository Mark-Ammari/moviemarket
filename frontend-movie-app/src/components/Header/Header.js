import React, { useContext } from 'react';
import classes from './Header.module.css';
import Logo from '../Logo/Logo';
import NavButton from '../NavButton/NavButton';
import NavDrawer from '../Drawer/NavDrawer';
import SearchBar from '../SearchBar/SearchBar';
import { OpenInNewRounded, FavoriteRounded } from '@material-ui/icons';
import SearchModal from '../SearchModal/SearchModal';
import { useMediaQuery } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import auth from '../../context/context';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/actions/authUser';

export default function Header() {
    const matches = useMediaQuery('(min-width:767px)');
    const history = useHistory()
    const dispatch = useDispatch()
    const authContext = useContext(auth)
    const authenticatePath = () => {
        history.push({
            pathname: "/account/auth"
        })
    }
    const myFavoritesHandler = () => {
        history.push({
            pathname: "/account/favorites"
        })
    }

    const logoutUserHandler = () => {
        dispatch(logoutUser())
        window.location.reload()
    }
    return (
        <header className={classes.Header}>
            <div className={classes.HeaderNavContainer}>
                <nav className={classes.HeaderNavDrawer}>
                    <NavDrawer />
                    <Logo />
                </nav>
                {matches ? <SearchBar /> : null}
                <nav className={classes.HeaderNavButtons}>
                    {!matches ? <SearchModal /> : null}
                    <NavButton onClick={myFavoritesHandler} startIcon={<FavoriteRounded />}>
                        Favorites
                    </NavButton>
                    {authContext.isAuth ?
                        <NavButton onClick={logoutUserHandler} startIcon={<OpenInNewRounded />}>
                            Sign Out
                        </NavButton>
                        :
                        <NavButton onClick={authenticatePath} startIcon={<OpenInNewRounded />}>
                            Sign In
                        </NavButton>
                    }
                </nav>
            </div>
        </header>
    );
};
