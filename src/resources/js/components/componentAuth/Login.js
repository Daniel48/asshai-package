import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Link, Route, Switch, Redirect} from 'react-router-dom';
import Index from "../Index";
import {PostData} from '../services/PostData';

class Login extends Component {
  constructor(){
    super();
    this.state={
      user_email:'',
      user_password:''
    };
    this.login = this.login.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  login(){
    PostData('login',this.state).then((result)=>{
      let responseJSON =result;
      console.log(responseJSON);
    });
  }

  onChangeEmail(e){
    this.setState({user_email:e.target.value});
  }
  onChangePassword(e){
    this.setState({user_password:e.target.value});
  }


  onSubmit(e){
    e.preventDefault();
    const user ={
        user_email : this.state.user_email,
        user_password : this.state.user_password
    };
    axios.post('http://127.0.0.1:8000/api/loginu',user)
  .then(res =>{ res.data});
}
  render() { 
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
            <div className="panel panel-default">
                <div className="panel panel-heading">
                        <h1 className="panel panel-tittle"> Acceso a la aplicacion </h1>
                </div>
                <div className="panel-body">
                <form  >
                        
                <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="user_email" name="email"
                            placeholder="ingresa tu email" 
                            value={this.state.user_email} onChange={this.onChangeEmail}/>
                  </div>
                  <div className="form-group">
                        <label htmlFor="password">Contrasenia</label>
                        <input type="password" className="form-control" id="user_password" name="password"
                            placeholder="ingresa tu contrasenia" 
                            value={this.state.user_password} onChange={this.onChangePassword}/>
                  </div>
                            <button onClick={this.login} className="btn btn-primary btn-block">Acceder </button>
                  </form>
                </div>
                
            </div>
        </div>
    </div>  
    );
  }
}
export default Login;
if (document.getElementById("applogin")) {
  ReactDOM.render(<Login />, document.getElementById("applogin"));
}
