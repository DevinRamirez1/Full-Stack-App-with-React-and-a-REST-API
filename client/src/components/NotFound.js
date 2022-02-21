import React, { Component } from 'react';

export default class Error extends Component {
    render () {
        return (
            <div className='wrap'>
                <h2>Not Found</h2>
                <p>Uh oh. Looks like we couldn't find the page you were looking for.</p>
            </div>
        )
    }
}