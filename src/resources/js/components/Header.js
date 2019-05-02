import React, { Component } from 'react';
import {Link, Route, Switch, Redirect} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Users from './users/Index';
import Groups from './groups/Index';
import Error404 from './users/Error404';
import Privilege from './privilege/Index';
import GivePrivileges from './groups/GivePrivileges';

var id=0;
export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            user_active:props.message.user_active,
            /* user_id:this.props.id,
            user_nom:this.props.name,
            user_idGroup:props.idGroup, */
            privilege:props.message.privileges
        };
        console.log(this.state);
    }
    /* componentWillReceiveProps(props){
        this.setState({ loading: true });
    } */

    onSubmit(e){
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/logout')
        .then(res =>{ console.log("HOLA MUNDO");} );  
    }
    
    
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
                    {
                            this.state.privilege.map(getPriv =>{
                                return( 
                                    <li key={getPriv.idPriv} className="nav-item">
                                    <Link className="nav-link" to={`/asshai/${getPriv.slug}`}>{getPriv.privilegio}</Link>
                                    </li>
                                );
                            })
                            
                    }
                    {/* <li className="nav-item"  >
                        <Link className="nav-link" to="/asshai/users">Usuarios</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/asshai/groups">Grupos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/asshai/privileges">Privilegios</Link>
                    </li> */}
                    </ul>
                    <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
                    {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */} 
                    {/* <button className="btn btn-danger btn-xs" type="submit">Cerrar Sesion</button> */}
                    </form>
                </div>
                </nav>
                    <Switch>
                    <Route exact path='/asshai/index' component={Home}/>
                    <Route exact path='/asshai/about' component={About}/>
                    <Route exact path='/asshai/users' component={Users}/>
                    <Route exact path='/asshai/users/add' component={Users}/>
                    <Route exact path='/asshai/users/edit/:id' component={Users}/>
                    <Route exact path='/asshai/groups' component={Groups}/>
                    <Route exact path='/asshai/groups/add' component={Groups}/>
                    <Route exact path='/asshai/groups/edit/:id' component={Groups}/>
                    <Route exact path='/asshai/groups/give/:id' component={GivePrivileges}/>
                    <Route exact path='/asshai/privileges' component={Privilege}/>
                    <Route exact path='/asshai/privileges/add' component={Privilege}/>
                    <Route exact path='/asshai/privileges/edit/:id' component={Privilege}/>
                    <Route exact path="/asshai/*" component={Error404}/>
                    </Switch>
                </div>
        );
    }
}
