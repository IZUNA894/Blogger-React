import React from "react";
import {NavLink} from "react-router-dom";
import SigninLink from "./signinlink.js";
import SignoutLink from "./signoutlink.js";
import { connect} from "react-redux";

class App extends React.Component{
   render(){
       var links = this.props.auth.uid ?  < SigninLink />: < SignoutLink />
       return(
           <nav className="nav-wrapper grey darken-3 row">
               <div className="container">

                 <NavLink to="/" className="brand-logo" >Blogger</NavLink>
                 {links}
                 </div>
           </nav>
       )
   }
}

function mapStateToProps(state){
    //console.log(state);
    return{
        auth:state.firebase.auth
    }
    
}
export default connect(mapStateToProps)(App);