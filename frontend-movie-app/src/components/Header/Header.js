import React from 'react';
import classes from './Header.module.css';
import Logo from '../Logo/Logo';
import NavButtons from '../NavButtons/NavButtons';
import NavDrawer from '../Drawer/NavDrawer';
import SearchBar from '../SearchBar/SearchBar';

export default function Header() {
    return (
        <header className={classes.Header}>
            <div className={classes.HeaderNavContainer}>
                <nav className={classes.HeaderNavDrawer}>
                    <NavDrawer />
                    <Logo />
                </nav>
                <SearchBar />
                <NavButtons />
            </div>
        </header>
    );
};
