import React, { Component } from 'react';

export default class ErrorAlert extends Component {
    render() {
        return (
            <div className="alert alert-danger" role="alert"> Ha ocurrido un error
            </div>
        );
    }
}
