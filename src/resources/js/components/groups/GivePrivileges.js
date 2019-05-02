import React, { Component } from 'react';
import axios from 'axios';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';

var isMounted = false;    

export default class GivePrivileges extends Component {
    constructor(props){
        super(props);
        this.state={
            group_name:props.location.state.name,
            privileges:[],
            privileges_name:'',
            alert_message :''
        };
        this.onChangePrivilege=this.onChangePrivilege.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    componentDidMount(){
        isMounted = true;
        axios.get('http://127.0.0.1:8000/api/pvjson')
        .then(response =>{
            if(isMounted){
                console.log(response);
                this.setState(
                    {
                        privileges:response.data,
                    });
            }
            /* for (let i = 0; i < privileges.length; i++) {
                this.setState={check:}
                //this.setstate.check.name:privileges[0].
                
            } */
            console.log(this.state.privileges[0].name);
            
        });
    }
    
    onSubmit(e){
        e.preventDefault();
        const privileges ={
            privileges_name : this.state.privileges_name
        };
        console.log(privileges);
        axios.post('http://127.0.0.1:8000/api/privilegegroup/store/'+this.props.match.params.id,privileges)
        .then(res =>{
            this.setState({alert_message:"success"});
        }).catch(error =>{
            this.setState({alert_message:"error"});
        });
    }
    onChangePrivilege(e) {
        this.setState({privileges_name: e.target.value});
        console.log(this.state.privileges_name);
      }

    render() {
        const options = [];
        this.state.privileges.forEach(response =>options.push(
            <option key={response.id} value={response.name}>{response.name}</option>
        ));
        return (
            <div>
                <hr/>
                {this.state.alert_message=="success"?<SuccessAlert message={"El usuario actualizado correctamente"}/>:null}
                {this.state.alert_message=="error"?<ErrorAlert message={"Ha ocurrido un error mientras se actualizaba el usuario"}/>:null}
                
                <h1><a>{this.state.group_name}</a></h1>
                <form onSubmit={this.onSubmit}>
		            <div className="form-group" >
                        <select  className="widefat" value={this.state.privileges_name} id="privileges_name" name={this.state.privileges_name} onChange={this.onChangePrivilege}>
                        {options}                          
                        </select>
                    </div>
                        <button type="submit" className="btn btn-primary">Agregar privilegio</button>
                </form>
        </div> 
        );
    }
}
