import React, { useState } from 'react';
import classes from './AuthContainer.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../../store/actions/authUser'

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
                    {authState === "login" ? <Login /> : <Signup />}
                </CardContent>
            </Card>
        </div>
    );
}

const Login = () => {
    return (
        <div>
            <input
                className={classes.AuthInput}
                autoFocus
                id="name"
                label="Email Address"
                type="email"
                placeholder="Email Address *"
                required
            />
            <input
                className={classes.AuthInput}
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
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const errorMessage = useSelector(state => state.signup.errorMessage)
    const error = useSelector(state => state.signup.error)
    function handleUserSignup() {
        dispatch(signupUser(email, password))
    }

    return (
        <div>
            <input
                className={classes.AuthInput}
                autoFocus
                id="name"
                label="Email Address"
                type="email"
                placeholder="Email Address *"
                required
                pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className={classes.AuthInput}
                id="password"
                placeholder="Password *"
                required
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error ? !errorMessage.message ? null : errorMessage.message.map((err, id) => {
                return <p key={id} className={classes.ErrorMessage}>{err}</p>
            }) : null}
            <button onClick={handleUserSignup} className={classes.Button}>Signup</button>
            <p className={classes.SignupMessage}>By signing up, you agree to our <strong>Terms, Data Policy</strong> and <strong>Cookies Policy.</strong></p>
        </div>
    )
}