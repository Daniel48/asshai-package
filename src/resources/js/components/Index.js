import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";

import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
export default class Index extends Component {
  render() {
    return (
      <div className="container">
        <Header data={data}/>
        
          Bienvenido {data}
        
        <Footer />
      </div>
    );
  }
}

if (document.getElementById("app")) {
  var data = document.getElementById("app").getAttribute("data");
  //console.log(JSON.stringify(data));
  ReactDOM.render(<Router><Index data={data} /></Router>, document.getElementById("app"));
}
