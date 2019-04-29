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
            groups:[],
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
        axios.get('http://127.0.0.1:8000/api/groups')
        .then(response =>{
            if(isMounted){
                console.log("PETICION GET HECHA");
                this.setState(
                    {
                        groups:response.data.data,
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
        console.log(JSON.stringify(id+"AFUERA"));
         axios.delete('http://127.0.0.1:8000/api/groups/delete/'+id)
        .then(response =>{
            var groups1 = this.state.groups;
            console.log("HOLA DESDE AQUI");
            for (var i = 0; i < groups1.length; i++) {
                if (groups1[i].id == id) {
                    groups1.splice(i,1);
                    if (isMounted) {
                        this.setState({groups:groups1});
                      }
                }
            }
                this.setState({alert_message:"success"});
            }).catch(error =>{
                this.setState({alert_message:"error"});
            }); 
        console.log(this.state.groups);   
    }
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
        axios.get('http://127.0.0.1:8000/api/groups?page='+pageNumber)
        .then(response =>{
            if(isMounted){
                console.log(response.data.data);
                this.setState(
                    {
                        groups:response.data.data,
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
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.groups.map(getGroups =>{
                                return(
                                <tr key={getGroups.id}>
                                    <th scope="row">{getGroups.id}</th>
                                    <td>{getGroups.name}</td>
                                    <td>
                                        <Link to={`/asshai/groups/edit/${getGroups.id}`}>Edit </Link> 
                                        <a href="#" onClick={this.onDelete.bind(this,getGroups.id)}>Delete</a>
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
