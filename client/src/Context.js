import React, { useState, createContext } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

export const userContext = createContext();

export const UserProvider = (props) => {
    const authUser = Cookies.get('authenticatedUser');
    const [user, setUser] = useState(authUser ? JSON.parse(authUser) : null);

    const signIn = (e) => {
        e.preventDefault();
        const encodedCredentials = Buffer.from( `${e.target.emailAddress.value}:${e.target.password.value}`).toString('base64');

        axios
            .get('users', {
                headers: {
                    Authorization: `Basic ${encodedCredentials}`,
                },
            })
            .then((res) => {
                if (res.status === 200) {
                    setUser(res.data);
                    res.data.encodedCred = encodedCredentials;
                    res.data.password = e.target.password.value;
                    Cookies.set('authenticatedUser', JSON.stringify(res.data), {
                        expires: 7,
                        path: ','
                    });

                    window.location.assign('/');
                }
            })
            .catch(async (error) => {
                Cookies.remove('authenticatedUser');
                setUser(null);
                window.location.assign('/');
            });
    };

    const value ={
        user,
        setUser,
        actions: {
            signOut: signOut,
            signIn: signIn,
        },
    };

    return (
        <userContext.Provider value={value}>{props.children}</userContext.Provider>
    );
};

export const Consumer = userContext.Consumer;