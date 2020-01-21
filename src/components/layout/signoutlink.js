import React from "react";
import {NavLink} from "react-router-dom";

class App extends React.Component{
   render(){
       return(
          <ul className="right">
              <li className=""><NavLink to="/signin">Log in</NavLink></li>
              <li className=""><NavLink to="/signup">Sign Up</NavLink></li>
          </ul>
       )
   }
}
export default App;