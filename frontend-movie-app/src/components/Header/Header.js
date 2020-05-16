import React from 'react';
import classes from './Header.module.css';
import Logo from '../Logo/Logo';
import NavButton from '../NavButton/NavButton';
import NavDrawer from '../Drawer/NavDrawer';
import SearchBar from '../SearchBar/SearchBar';
import { OpenInNewRounded, FavoriteRounded } from '@material-ui/icons';
import SearchModal from '../SearchModal/SearchModal';
import { useMediaQuery } from '@material-ui/core';

export default function Header() {
    const matches = useMediaQuery('(min-width:767px)');

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
                    <NavButton startIcon={<FavoriteRounded />}>
                        Favorites
                    </NavButton>
                    <NavButton startIcon={<OpenInNewRounded />}>
                        Sign In
                    </NavButton>
                </nav>
            </div>
        </header>
    );
};
