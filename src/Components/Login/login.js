import React, { useState, useEffect } from 'react'
import "./login.module.css"
import classes from './login.module.css';
import Button from '../Button/Button';

const Login = (props) => {


    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);


    useEffect(() => {

        const identifier = setTimeout(() => {
            console.log("Hello")
            setFormIsValid(
                enteredEmail.includes('@') && enteredPassword.trim().length > 6
            );
        }, 2000);


        //  Clear Timeout 

        return () => {
            clearTimeout(identifier);
            console.log("Identifier")
        }

    }, [enteredEmail, enteredPassword])

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);


    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);


    };

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'));
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(enteredEmail,enteredPassword)
        props.onLogin(enteredEmail, enteredPassword);
        
    };


    return (
        <div>


            <h2 style={{ textAlign: "left", paddingLeft: "20px", paddingTop: "10px" }}>
                Welcome to BidOnHomes
            </h2>

            <div>
                <div style={{ marginTop: "50px", fontWeight: "500" }}>
                    <em>
                        Login to enter in  Product Inventory Management
                    </em>
                </div>
            </div>

            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        placeholder='abc@email.com'
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>

                
            </form>


        </div>
    )
}

export default Login