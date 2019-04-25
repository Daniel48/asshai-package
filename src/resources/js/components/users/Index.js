import React, { Component } from 'react';

import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Add from './Add';
import Listing from './Listing';
import Edit from './Edit';

export default class Index extends Component {
    render() {
        return (
            <div> 
              <Router>
                    <div> 
                        <Link to="/asshai/users" className="btn btn-primary">Listing</Link> &nbsp;
                        <Link to="/asshai/users/add" className="btn btn-primary">Add </Link>
                        <Route exact path="/asshai/users" component={Listing}/>
                        <Route exact path="/asshai/users/add" component={Add}/>
                        <Route exact path="/asshai/users/edit/:id" component={Edit}/>
                    </div>
              </Router>  
            </div>
        );
    }
}
