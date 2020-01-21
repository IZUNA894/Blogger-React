import React, { Component } from 'react'
import {connect} from "react-redux";
import {SignUp} from "../../reduxData/actions/authAction";

 class App extends Component {
    state={
            email:"",
            password:"",
            firstName:'',
            lastName:''
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.signup(this.state);
    }

    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    componentWillReceiveProps(nextProps){
        //console.log("componentWillRecievePorops",nextProps);
        let {auths} = nextProps;
        //console.log(auths.uid)
        if(  auths.uid){
           window.location.href = "/";
       }
    }
    render() {
        var errMsg="";
        if(this.props.auth.authErr){
            errMsg=this.props.auth.authMess.toString();
        }
        return (
            <div className="container">
                <form onSubmit={(e)=>this.handleSubmit(e)} className="">
                    <h5 className="grey-text text-darken-3">Sign-in</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" onChange={ (e)=>{this.handleChange(e)} }/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={ (e)=>{this.handleChange(e)} }/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">FirstName</label>
                        <input type="text" id="firstName" name="firstName" onChange={ (e)=>{this.handleChange(e)} }/>
                    </div><div className="input-field">
                        <label htmlFor="lastName">LastName</label>
                        <input type="text" id="lastName" name="lastName" onChange={ (e)=>{this.handleChange(e)} }/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign-Up</button>
                    </div>
                </form>
                <div className="center red-text" >
                    <p>{errMsg}</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth:state.auth,
        auths:state.firebase.auth
    }
}
function mapDispatchToProps(dispatch){
    return{
        signup:(newUser)=>dispatch(SignUp(newUser))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)