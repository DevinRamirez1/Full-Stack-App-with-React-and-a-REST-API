import React, {useEffect} from "react";
import {Navigate} from 'react-router-dom';

function UserSignOut ({ context }) {
    useEffect(() => context.actions.signout());
    return(
        <Navigate replace to='/' />
    );
}

export default UserSignOut;