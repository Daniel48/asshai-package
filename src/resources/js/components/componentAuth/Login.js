import React, { Component } from "react";
import ReactDOM from "react-dom";


class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login(){
    console.log("El BOTON SIRVE PUTOS");
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state);
  }

  render() { 
    return (
      <div className="container">
      <div className="row small-up-1 medium-up-20 large-up-4">
        <div className="column bodyPart">
              <h2 >INICIO DE SESIÓN</h2>
              <label >Usuario</label>
              <input type="text" className="form-control" placeholder="Usuario" onChange={this.onChange}/>
              <label >Contraseña</label>
              <input type="password" className="form-control" placeholder="Contraseña" onChange={this.onChange}/>
              <input type="submit" value="Login" className="button" onClick={this.login}/>
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
