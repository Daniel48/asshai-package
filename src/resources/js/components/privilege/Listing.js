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
            privileges:[],
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
        axios.get('http://127.0.0.1:8000/api/privileges')
        .then(response =>{
            if(isMounted){
                console.log("PETICION GET HECHA");
                console.log(response);
                this.setState(
                    {
                        privileges:response.data.data,
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
         axios.delete('http://127.0.0.1:8000/api/privileges/delete/'+id)
        .then(response =>{
            var privileges1 = this.state.privileges;
            console.log("HOLA DESDE AQUI");
            for (var i = 0; i < privileges1.length; i++) {
                if (privileges1[i].id == id) {
                    privileges1.splice(i,1);
                    if (isMounted) {
                        this.setState({privileges:privileges1});
                      }
                }
            }
                this.setState({alert_message:"success"});
            }).catch(error =>{
                this.setState({alert_message:"error"});
            }); 
        console.log(this.state.privileges);   
    }
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
        axios.get('http://127.0.0.1:8000/api/privileges?page='+pageNumber)
        .then(response =>{
            if(isMounted){
                console.log(response.data.data);
                this.setState(
                    {
                        privileges:response.data.data,
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
                {this.state.alert_message=="success"?<SuccessAlert message={"El privilegio se elimino correctamente"}/>:null}
                {this.state.alert_message=="error"?<ErrorAlert message={"Ha ocurrido un error mientras se eliminaba el privilegio"}/>:null}


                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.privileges.map(getPrivileges =>{
                                return(
                                <tr key={getPrivileges.id}>
                                    <th scope="row">{getPrivileges.id}</th>
                                    <td>{getPrivileges.name}</td>
                                    <td>{getPrivileges.description}</td>
                                    <td>
                                        <Link to={`/asshai/privileges/edit/${getPrivileges.id}`}>Edit </Link> 
                                        <a href="#" onClick={this.onDelete.bind(this,getPrivileges.id)}>Delete</a>
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
