import React, { Component } from 'react';

export default class Error extends Component {
    render() {
        return (
            <div className='wrap'>
                <h2>Forbidden</h2>
                <p>You are not allowed to access this page</p>
            </div>
        )
    }
}