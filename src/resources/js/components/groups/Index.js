import React, { Component } from 'react';

import {Link, Route} from 'react-router-dom';
import Add from './Add';
import Listing from './Listing';
import Edit from './Edit';

export default class Index extends Component {
    render() {
        return (
            <div> 
              
                    <div> 
                        <Link to="/asshai/groups" className="btn btn-primary">Listing</Link> &nbsp;
                        <Link to="/asshai/groups/add" className="btn btn-primary">Add </Link>
                        <Route exact path="/asshai/groups" component={Listing}/>
                        <Route exact path="/asshai/groups/add" component={Add}/>
                        <Route exact path="/asshai/groups/edit/:id" component={Edit}/>
                    </div>
               
            </div>
        );
    }
}
