import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './users/Index';
import Error404 from './users/Error404';

export default class Header extends Component {
    render() {
        return (
                <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/asshai/index">Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/asshai/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/asshai/users">Usuarios</Link>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                </nav>
                    <Switch>
                    <Route exact path='/asshai/index' component={Home}/>
                    <Route exact path='/asshai/about' component={About}/>
                    <Route exact path='/asshai/users' component={Users}/>
                    <Route exact path="/asshai/users/add" component={Users}/>
                    <Route exact path="/asshai/users/edit/:id" component={Users}/>
                    <Route exact path="/asshai/*" component={Error404}/>
                    </Switch>
                </div>
        );
    }
}
