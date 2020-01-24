import React, { Component } from 'react'
import {connect} from "react-redux";
import CreateProject from "../../reduxData/actions/projectAction";
import {Redirect} from "react-router-dom";

class App extends Component {
    state={
            title:"",
            content:""
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(this.state);

        this.props.create_Project(this.state);
        this.props.history.push("/");
    }

    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    render() {
        let {auth} = this.props;
        if(!auth.uid){
            return <Redirect to="/signin" />
        }
        else{
            return (
                <div className="container">
                    <form onSubmit={(e)=>this.handleSubmit(e)} className="">
                        <h5 className="grey-text text-darken-3">Create new Project</h5>
                        <div className="input-field">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" name="title" onChange={ (e)=>{this.handleChange(e)} }/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="content">Content</label>
                            <textarea className="materialize-textarea" name="content" onChange={ (e)=>{this.handleChange(e)} }/>
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Create</button>
                        </div>
                    </form>
                </div>
            )
        }
    }
}
function mapStateToProps(state){
    return{
        auth:state.firebase.auth
    }
}
function mapDispatchToProps(dispatch){
    return{
        create_Project: (project) =>dispatch(CreateProject(project))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);