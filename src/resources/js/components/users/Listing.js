import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pagination from "react-js-pagination";
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';

var isMounted = false;
export default class Listing extends Component {
    
    constructor(){
        super();
        this.state={
            users:[],
            activePage:1,
            itemsCountPerPage:1,
            totalItemsCount:1,
            pageRangeDisplayed:1,
            alert_message :''
        };
        this.handlePageChange=this.handlePageChange.bind(this);
    }
    
    componentDidMount(){
        isMounted = true;
        
        axios.get('http://127.0.0.1:8000/api/users')
        .then(response =>{
            if(isMounted){
                this.setState(
                    {
                        users:response.data.data,
                        itemsCountPerPage:response.data.per_page,
                        totalItemsCount:response.data.total,
                        activePage:response.data.current_page
                    });
            }
            
        });
    }
    componentWillUnmount() {
        isMounted = false;
    }

    onDelete(id){
         axios.delete('http://127.0.0.1:8000/api/users/delete/'+id)
        .then(response =>{
            var users1 = this.state.users;
            for (var i = 0; i < users1.length; i++) {
                if (users1[i].id == id) {
                    users1.splice(i,1);
                    if (isMounted) {
                        this.setState({users:users1});
                      }
                }
            }
                this.setState({alert_message:"success"});
            }).catch(error =>{
                this.setState({alert_message:"error"});
            });    
    }
    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
        axios.get('http://127.0.0.1:8000/api/users?page='+pageNumber)
        .then(response =>{
            if(isMounted){
                this.setState(
                    {
                        users:response.data.data,
                        itemsCountPerPage:response.data.per_page,
                        totalItemsCount:response.data.total,
                        activePage:response.data.current_page
                    });
            }
            
        });
      }

    render() {
        return (
            <div> 
                <hr/>
                {this.state.alert_message=="success"?<SuccessAlert message={"El usuario se elimino correctamente"}/>:null}
                {this.state.alert_message=="error"?<ErrorAlert message={"Ha ocurrido un error mientras se eliminaba el usuario"}/>:null}


                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Direccion</th>
                        <th scope="col">Email</th>
                        <th scope="col">Grupo</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Username</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(getUsers =>{
                                return(
                                <tr key={getUsers.id}>
                                    <th scope="row">{getUsers.id}</th>
                                    <td>{getUsers.name}</td>
                                    <td>{getUsers.address}</td>
                                    <td>{getUsers.email}</td>
                                    <td>{getUsers.group}</td>
                                    <td>{getUsers.telephone}</td>
                                    <td>{getUsers.username}</td>
                                    <td>
                                        <Link to={`/asshai/users/edit/${getUsers.id}`}>Edit </Link> 
                                        <a href="#" onClick={this.onDelete.bind(this,getUsers.id)}>Delete</a>
                                    </td>
                                </tr>
                                )
                            })
                            
                        }
                    </tbody>
                    </table>
                    <div className="d-flex justify-content-center">
                        <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemsCountPerPage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                        onChange={this.handlePageChange}
                        itemClass='page-item'
                        linkClass='page-link'
                        />
                    </div>  
            </div>
        );
    }
}
