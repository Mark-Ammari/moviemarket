import React from 'react';
import classes from './Header.module.css';
import Logo from '../Logo/Logo';
import NavButtons from '../NavButtons/NavButtons';
import NavDrawer from '../Drawer/NavDrawer';

export default function Header() {
    return (
        <header className={classes.Header}>
            <nav className={classes.HeaderNavDrawer}>
                <NavDrawer />
                <Logo />
            </nav>
            <NavButtons />
        </header>
    );
};
