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
                        <Link to="/asshai/privileges" className="btn btn-primary">Listing</Link> &nbsp;
                        <Link to="/asshai/privileges/add" className="btn btn-primary">Add </Link>
                        <Route exact path="/asshai/privileges" component={Listing}/>
                        <Route exact path="/asshai/privileges/add" component={Add}/>
                        <Route exact path="/asshai/privileges/edit/:id" component={Edit}/>
                    </div>
               
            </div>
        );
    }
}
