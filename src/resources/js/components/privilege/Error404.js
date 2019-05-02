import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Error404 extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
               <div className="alert alert-danger">
                   404 Page Not Found. <Link to='/asshai/index' className="alert-link">Back to Home</Link>
               </div>
            </div>
        );
    }
}
