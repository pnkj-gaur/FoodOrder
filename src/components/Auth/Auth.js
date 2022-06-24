import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth/auth-reducer';
import classes from './Auth.module.css';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const history=useNavigate();
    const dispatch=useDispatch();
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        let email = emailInputRef.current.value;
        let pass = passwordInputRef.current.value;
        setIsLoading(true);

        let url;
        if (isLogin) {
            url =
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDafth-1kz0p6aWbuxf-YDfidZ9UhF-shc';
        } else {
            url =
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDafth-1kz0p6aWbuxf-YDfidZ9UhF-shc';
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: pass,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            setIsLoading(false);
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then((data) => {
                    let errorMessage = 'Authentication failed!';
                    throw new Error(errorMessage);
                });
            }
        }).then((data) => {
            const expirationTime = new Date(
                new Date().getTime() + +data.expiresIn * 1000
            );
            dispatch(authActions.login({token:data.idToken,expTime:expirationTime.toISOString()}));
            history('/',{replace:true});
        }).catch((err) => {
            alert(err.message);
        });

    };

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required ref={emailInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input
                        type='password'
                        id='password'
                        required
                        ref={passwordInputRef}
                    />
                </div>
                <div className={classes.actions}>
                    {!isLoading && (
                        <button>{isLogin ? 'Login' : 'Create Account'}</button>
                    )}
                    {isLoading && <p>Sending request...</p>}
                    <button
                        type='button'
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </section>
    );
}

export default LogIn;