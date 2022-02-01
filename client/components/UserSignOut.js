import React, {useEffect} from "react";
import {Redirect} from 'react-router-dom';

export default ({ context }) => {
    useEffect(() => context.actions.signout());
    return(
        <Redirect to='/' />
    );
}