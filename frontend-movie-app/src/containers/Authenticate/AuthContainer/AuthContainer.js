import React, { useState } from 'react';
import classes from './AuthContainer.module.css';
import { TextField, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
    }
});

export default function AuthContainer() {
    const styles = useStyles();
    const [authState, setAuthState] = useState("login")
    return (
        <div className={classes.AuthContainer}>
            <Card className={styles.root} variant="outlined">
                <CardContent>
                    <div className={[classes.AuthLabel, authState === "login" ? classes.ActiveLogin : classes.ActiveSignup].join(" ")}>
                        <h2 onClick={() => setAuthState("login")}>Login</h2>
                        <h2 onClick={() => setAuthState("signup")}>Signup</h2>
                    </div>
                    { authState === "login" ? <Login /> : <Signup />}
                </CardContent>
            </Card>
        </div>
    );
}

const Login = () => {
    return (
        <div>
            <input
                className={classes.Input}
                autoFocus
                id="name"
                label="Email Address"
                type="email"
                placeholder="Email Address *"
                required
            />
            <input
                className={classes.Input}
                id="password"
                placeholder="Password *"
                required
                label="Password"
                type="password"
            />
            <button className={classes.Button}>Login</button>
        </div>
    )
}

const Signup = () => {
    return (
        <div>
            <input
                className={classes.Input}
                autoFocus
                id="name"
                label="Email Address"
                type="email"
                placeholder="Email Address *"
                required
            />
            <input
                className={classes.Input}
                id="password"
                placeholder="Password *"
                required
                label="Password"
                type="password"
            />
            <button className={classes.Button}>Signup</button>
        </div>
    )
}