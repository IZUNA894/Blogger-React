import React , {Component} from  "react";
import Notifications from "./notifications"
import ProjectList from "../projects/projectList";
import {connect} from "react-redux";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import {Redirect} from "react-router-dom";

class App extends Component{
    render(){
       let {auth} = this.props;
        if(!auth.uid){
            return <Redirect to="/signin" />
        }
        else{
            return(
                <div className="dashboard container" >
                    <div className="row">
                        <div className="col s12 m6"> <ProjectList projects={this.props.projects}/> </div>
                        <div className="col s12 m5 offset-m1"><Notifications notifications={this.props.notifications}/></div>
                        
                    </div>
                </div>
            )
        }
    }
}
function mapStateToprops(state,ownProps){
    //console.log(state);
    
    return {
        projects:state.firestore.ordered.projects || state.project.projects,
        users:state.user.users,
        auth:state.firebase.auth,
        notifications:state.firestore.ordered.notifications
    }
};
function mapDispacthToProps(dispacth){
    return {
        
    }
}


export default compose(
                  connect(mapStateToprops,mapDispacthToProps),
                  firestoreConnect([
                      {collection:"projects",orderBy:['createdAt',"desc"]},
                      {collection:"notifications",limit:3,orderBy:['time',"desc"]}])
                    )(App);