import React, { Component } from 'react';
import axios from 'axios';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';

var isMounted = false;
export default class Edit extends Component {
    constructor(props){
        super(props);
        this.onChangeGroupName=this.onChangeGroupName.bind(this);
        /* this.onChangeUserDir=this.onChangeUserDir.bind(this);
        this.onChangeUserEmail=this.onChangeUserEmail.bind(this);
        this.onChangeUserTel=this.onChangeUserTel.bind(this);
        this.onChangeUserUsName=this.onChangeUserUsName.bind(this);
         *///this.onChangeUserPassword=this.onChangeUserPassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            group_name:'',
            //user_dir:'',
            //user_email:'',
            //user_tel:'',
            //user_username:'',
            alert_message :''
            //user_password:''
        };
    }
    componentDidMount(){
        isMounted = true;
        axios.get('http://127.0.0.1:8000/api/groups/edit/'+this.props.match.params.id)
        .then(response =>{
            if(isMounted){
                this.setState(
                    {
                        group_name:response.data.name,
                        /* user_dir:response.data.direccion,
                        user_email:response.data.email,
                        user_tel:response.data.telefono,
                        user_username:response.data.username */
                    });
            }
            
        });
    }
    onChangeGroupName(e){
        this.setState({
            group_name:e.target.value
        });
    }
    /* onChangeUserDir(e){
        this.setState({
            user_dir:e.target.value
        });
    }
    onChangeUserEmail(e){
        this.setState({
            user_email:e.target.value
        });
    }
    onChangeUserTel(e){
        this.setState({
            user_tel:e.target.value
        });
    }

    onChangeUserUsName(e){
        this.setState({
            user_username:e.target.value
        });
    } */
    
    onSubmit(e){
        e.preventDefault();
        const group ={
            group_name : this.state.group_name
            //user_dir : this.state.user_dir,
            //user_email : this.state.user_email,
            //user_tel : this.state.user_tel,
            //user_username : this.state.user_username
        };
        axios.put('http://127.0.0.1:8000/api/groups/update/'+this.props.match.params.id,group)
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
                {this.state.alert_message=="success"?<SuccessAlert message={"El usuario actualizado correctamente"}/>:null}
                {this.state.alert_message=="error"?<ErrorAlert message={"Ha ocurrido un error mientras se actualizaba el usuario"}/>:null}


            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="group_name">Nombre</label>
                    <input type="text" className="form-control" id="group_name" 
                            value={this.state.group_name} onChange={this.onChangeGroupName}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        );
    }
}
