import React, { Component } from 'react';
import axios from 'axios';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';

var isMounted = false;
export default class Edit extends Component {
    constructor(props){
        super(props);
        this.onChangeUserName=this.onChangeUserName.bind(this);
        this.onChangeUserDir=this.onChangeUserDir.bind(this);
        this.onChangeUserEmail=this.onChangeUserEmail.bind(this);
        this.onChangeUserTel=this.onChangeUserTel.bind(this);
        this.onChangeUserGroup=this.onChangeUserGroup.bind(this);
        this.onChangeUserUsName=this.onChangeUserUsName.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            user_nom:'',
            user_dir:'',
            user_email:'',
            user_tel:'',
            user_group:'',
            user_username:'',
            alert_message :'',
            groups:[],
            url: window.location.pathname
        };
        
    }
    componentDidMount(){
        isMounted = true;
        axios.get('http://127.0.0.1:8000/api/gpjson')
        .then(response =>{
            if(isMounted){
                console.log(response.data);
                this.setState(
                    {
                        groups:response.data,
                    });
            }
        });
        axios.get('http://127.0.0.1:8000/api/users/edit/'+this.props.match.params.id)
        .then(response =>{
            if(isMounted){
                this.setState(
                    {
                        user_nom:response.data.name,
                        user_dir:response.data.address,
                        user_email:response.data.email,
                        user_tel:response.data.telephone,
                        user_username:response.data.username,
                        user_group:response.data.user_group
                    });
            }
            
        });
    }
    componentWillUnmount() {
        isMounted = false;
    }
    onChangeUserName(e){
        this.setState({
            user_nom:e.target.value
        });
    }
    onChangeUserGroup(e){
        this.setState({
            user_group:e.target.value
        });
        console.log(this.state.user_group);
    }
    onChangeUserDir(e){
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
    }
    
    onSubmit(e){
        e.preventDefault();
        const user ={
            user_nom : this.state.user_nom,
            user_dir : this.state.user_dir,
            user_email : this.state.user_email,
            user_tel : this.state.user_tel,
            user_group: this.state.user_group,
            user_username : this.state.user_username,
            url : this.state.url 
        };
        axios.put('http://127.0.0.1:8000/api/users/update/'+this.props.match.params.id,user)
        .then(res =>{
            this.setState({alert_message:"success"});
        }).catch(error =>{
            this.setState({alert_message:"error"});
        });
    }

    
    render() {
        const options = [];
        this.state.groups.forEach(response =>options.push(
            <option value={response.name}>{response.name}</option>
        ));
        return (
            <div>
                <hr/>
                {this.state.alert_message=="success"?<SuccessAlert message={"El usuario actualizado correctamente"}/>:null}
                {this.state.alert_message=="error"?<ErrorAlert message={"Ha ocurrido un error mientras se actualizaba el usuario"}/>:null}


            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="user_nom">Nombre</label>
                    <input type="text" className="form-control" id="user_nom" 
                            value={this.state.user_nom} onChange={this.onChangeUserName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="user_dir">Direccion</label>
                    <input type="text" className="form-control" id="user_dir" 
                            value={this.state.user_dir} onChange={this.onChangeUserDir}/>
                </div>
                <div className="form-group">
                    <label htmlFor="user_email">Email</label>
                    <input type="email" className="form-control" id="user_email" 
                    value={this.state.user_email} onChange={this.onChangeUserEmail} />
                </div>
                <div className="form-group">
                    <label htmlFor="user_tel">Telefono</label>
                    <input type="text" className="form-control" id="user_tel" 
                    value={this.state.user_tel} onChange={this.onChangeUserTel}/>
                </div>
                <div className="form-group">
                    <label htmlFor="user_username">Username</label>
                    <input type="text" className="form-control" id="user_username" 
                    value={this.state.user_username} onChange={this.onChangeUserUsName} />
                </div>
                <div className="form-group">
                        <select key={this.state.id} className="widefat" value={this.state.user_group} name="test" onChange={this.onChangeUserGroup}>
                        {options}                          
                        </select>
                    </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        );
    }
}
