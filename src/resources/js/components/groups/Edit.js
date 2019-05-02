import React, { Component } from 'react';
import axios from 'axios';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';

var isMounted = false;
export default class Edit extends Component {
    constructor(props){
        super(props);
        this.onChangeGroupName=this.onChangeGroupName.bind(this);
        
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            group_name:'',
            url:window.location.pathname,
            alert_message :''
        };
        console.log(window.location);
    }
    componentDidMount(){
        isMounted = true;
        axios.get('http://127.0.0.1:8000/api/groups/edit/'+this.props.match.params.id)
        .then(response =>{
            if(isMounted){
                this.setState(
                    {
                        group_name:response.data.name,
                    });
            }
            
        });
    }
    onChangeGroupName(e){
        this.setState({
            group_name:e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const group ={
            group_name : this.state.group_name,
            url:this.state.url
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
