import React, { Component } from 'react';
import axios from 'axios';

import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';

export default class Add extends Component {
    constructor(){
        super();
        this.onChangePrivilegeName=this.onChangePrivilegeName.bind(this);
        this.onChangePrivilegeDescription=this.onChangePrivilegeDescription.bind(this);
        
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            privilege_name:'',
            privilege_description:'',
            alert_message :'',
            url:window.location.pathname
        };
    }
    onChangePrivilegeName(e){
        
       this.setState({
            privilege_name:e.target.value
        });
    }
    onChangePrivilegeDescription(e){
        
        this.setState({
             privilege_description:e.target.value
         });
     }
    onSubmit(e){
        e.preventDefault();
        const privilege ={
            privilege_name : this.state.privilege_name,
            privilege_description: this.state.privilege_description,
            url:this.state.url
        };
        console.log(privilege);
        axios.post('http://127.0.0.1:8000/api/privileges/store',privilege)
        .then(res =>{
            this.setState({alert_message:"success"});
        }).catch(error =>{
            this.setState({alert_message:"error"});
        });
    }

    render() {
        return (
            <div>
                <hr/>
                {this.state.alert_message=="success"?<SuccessAlert message={"El privilegio agregado correctamente"}/>:null}
                {this.state.alert_message=="error"?<ErrorAlert message={"Ha ocurrido un error mientras se agregaba el privilegio"}/>:null}



                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="privilege_name">Nombre</label>
                        <input type="text" className="form-control" id="privilege_name" 
                                value={this.state.privilege_name} onChange={this.onChangePrivilegeName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="privilege_description">Descripcion</label>
                        <input type="text" className="form-control" id="privilege_description" 
                                value={this.state.privilege_description} onChange={this.onChangePrivilegeDescription}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
