import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Form from './Form';
import axios from 'axios';

export default function UserSignUp({ context }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');

    const navigate = useNavigate();

    const submit = () => {
        const user = {
            firstName,
            lastName,
            emailAddress,
            password,
        };

        context.data.createUser(user)
            .then( () => {
                console.log(`${firstName} is signed up.`);
                context.actions.signIn(emailAddress, password)
                    .then(() => {
                        navigate('/');
                    });
                console.log(`${emailAddress} is signed up and authenticated.`)
            })
            .catch (error => {
                if (error.response) {
                    setErrors(error.response.data.errors)
                } else {
                    navigate('/error');
                }
            });
    }

    cancel = () => {
        navigate('/');
    }

    return (
            <div className="form--centered">
                <h2>Sign Up</h2>

                <Form
                    cancel={cancel}
                    errors={errors}
                    submit={submit}
                    submitButtonText='Sign Up'
                    elements={() => (
                        <React.Fragment>
                            <label> First Name
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                />
                            </label>
                            <label>Last Name
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                />
                            </label>
                            <label>Email Address
                                <input
                                    id="emailAddress"
                                    name="emailAddress"
                                    type="email"
                                />
                            </label>
                            <label>Password
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                />
                            </label>
                        </React.Fragment>
                    )}
                />
                <p>Already have a user account? Click here to <a href="/signup">sign up</a>!</p>
            </div>
    )
}

export default UserSignUp;