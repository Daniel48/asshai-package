import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";


import {BrowserRouter as Router,Link,Route} from 'react-router-dom';

var isMounted = false;
var idUser = 0;

export default class Index extends Component {
  constructor(props){
    super(props);
    idUser = props.data;
    this.state={
        privileges:[],
        mounted:false,
        user_active: idUser
    };
}
  componentWillMount(){
    isMounted = true;
    console.log("ComponentWillMount");
    axios.get('http://127.0.0.1:8000/api/priv/'+idUser)
    .then(response =>{
        if(isMounted){
            this.setState(
              {privileges:response.data,
                mounted:true,
              });
        }
    });
    
}
componentDidMount(){
  console.log("ComponentDidMount");
  
}
  render() {
    return (
      <div className="container">
        {this.state.mounted==true?<Header data={data} message={this.state}/>:null}
          Bienvenido {data}
        <Footer />
      </div>
    );
  }
}

if (document.getElementById("app")) {
  var data = document.getElementById("app").getAttribute("data");
  ReactDOM.render(<Router><Index data={data} /></Router>, document.getElementById("app"));
}
