import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logOut} from "../../reduxData/actions/authAction";

class App extends React.Component{
   render(){
       return(
          <ul className="right">
              <li className=""><NavLink to="/createproject">New Project</NavLink></li>
              <li className=""><a onClick={this.props.logout} href="#">Log out</a></li>
              <li className=""><NavLink to="" className="btn btn-floating pink lighten-1">NN</NavLink></li>
          </ul>
       )
   }
}
function mapDispacthToProps(dispatch){
    return{
        logout:()=>dispatch(logOut())
    }
}
export default connect(null,mapDispacthToProps)(App);