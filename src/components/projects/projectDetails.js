import React, { Component } from 'react'
import { compose} from "redux";
import { connect } from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {Redirect} from "react-router-dom";
class App extends Component {
    render() {
        let {auth} = this.props;
        if(!auth.uid){
            return <Redirect to="/signin" />
        }
        else{
                   var id=this.props.match.params.id;
                    console.log(id);
                    var item = this.props.item;
                                    if( item ){
                                        return(
                                        <div className="container section project-details">
                                            <div className="card z-depth-0">
                                                <div className="card-content">
                                                    <span className="card-title">{ item.title}</span>
                                                    <p>{item.content}</p>
                                                </div>
                                                <div className="card-action grey lighten-4 grey-text">
                                                    <div>Posted by {item.firstName + item.lastName}</div>
                                                    <div>{item.timestamp.toString()}</div>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    }
                                    else{
                                        return(
                                        <div className="container section project-details">
                                            <div className="card z-depth-0">
                                                <div className="card-content">
                                                    <span className="card-title">still loading</span>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        )
            }                       }
    }
}

function mapStateToProps(state,ownProps){
    var id= ownProps.match.params.id;
    console.log(id);
    console.log(state)
    var projects = state.firestore.data.projects;
    var item = projects ? projects[id] : null;
    console.log(item)

    return {
        item : item,
        auth:state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:"projects"}])
      )(App);