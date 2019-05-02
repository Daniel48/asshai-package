import React, { Component } from 'react';

import {Link, Route} from 'react-router-dom';
import Add from './Add';
import Listing from './Listing';
import Edit from './Edit';

export default class Index extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div> 
              
                    <div> 
                        <Link to="/asshai/users" className="btn btn-primary">Listing</Link> &nbsp;
                        <Link to="/asshai/users/add" className="btn btn-primary">Add </Link>
                        <Route exact path="/asshai/users" component={Listing}/>
                        <Route exact path="/asshai/users/add" component={Add}/>
                        <Route exact path="/asshai/users/edit/:id" component={Edit}/>
                    </div>
               
            </div>
        );
    }
}
