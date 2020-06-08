import React, { useState, useEffect } from 'react';
import classes from './AuthContainer.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser, loginUser, loginGuest } from '../../../store/actions/authUser'

const useStyles = makeStyles({
    root: {
        width: 300,
        marginBottom: "1em"
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
            <Card className={styles.root} variant="outlined">
                <CardContent>
                    <GuestAccount />
                </CardContent>
            </Card>
        </div>
    );
}

const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const errorMessage = useSelector(state => state.login.errorMessage)
    const error = useSelector(state => state.login.error)
    const success = useSelector(state => state.login.success)
    const user = useSelector(state => state.login.user)
    
    function handleUserLogin() {
        dispatch(loginUser(email, password))
    }

    return (
        <div>
            <input
                className={classes.AuthInput}
                autoFocus
                id="name"
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address *"
                required
            />
            <input
                className={classes.AuthInput}
                id="password"
                placeholder="Password *"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                type="password"
            />
            {success ? <div className={classes.Success}><p>{user.message}</p></div> && window.location.reload() : null}
            {error ? <p className={classes.ErrorMessage}>{errorMessage.message}</p>
                :
                null
            }
            <button onClick={handleUserLogin} className={classes.Button}>Login</button>
        </div>
    )
}

const Signup = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const errorMessage = useSelector(state => state.signup.errorMessage)
    const error = useSelector(state => state.signup.error)
    const success = useSelector(state => state.signup.success)
    const user = useSelector(state => state.signup.user)
    const [emailValid, setEmailValid] = useState(false)
    const [passwordValid, setPasswordValid] = useState(false)

    useEffect(() => {
        if (email.length < 1 || /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email)) {
            setEmailValid(false)
        } else {
            setEmailValid(true)
        }
        if (password.length < 1 || /^([a-zA-Z0-9]{8,})$/.test(password)) {
            setPasswordValid(false)
        } else {
            setPasswordValid(true)
        }
    }, [email, password])

    function handleUserSignup() {
        dispatch(signupUser(email, password))
    }

    return (
        <div>
            <input
                className={[classes.AuthInput, emailValid ? classes.AuthInputError : null].join(' ')}
                autoFocus
                id="name"
                label="Email Address"
                type="email"
                placeholder="Email Address *"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className={[classes.AuthInput, passwordValid ? classes.AuthInputError : null].join(' ')}
                id="password"
                placeholder="Password *"
                required
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {success ? <div className={classes.Success}><p>{user.message}</p></div> && window.location.reload() : null}
            {error ? <p className={classes.ErrorMessage}>{errorMessage.message}</p> : null}
            <button onClick={handleUserSignup} className={classes.Button}>Signup</button>
            <p className={classes.SignupMessage}>By signing up, you agree to our <strong>Terms, Data Policy</strong> and <strong>Cookies Policy.</strong></p>
        </div>
    )
}

const GuestAccount = () => {
    const dispatch = useDispatch()

    function handleGuestLogin() {
        dispatch(loginGuest())
    }

    return (
        <div>
            <button onClick={handleGuestLogin} className={classes.Button}>Login as guest</button>
            <p className={classes.SignupMessage}>Please note, this is a <strong>Guest Account</strong>. Users may have used or modified this account.</p>
        </div>
    )
}