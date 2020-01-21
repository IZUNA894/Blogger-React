import React from 'react';
import Navlink from "./components/layout/navbar.js";
import Dashboard from "./components/dashboard/dashboard"
import { BrowserRouter,Switch ,Route} from 'react-router-dom';
import ProjectDetails from "./components/projects/projectDetails"
import Signin from './components/auth/signin';
import Signup from './components/auth/signout';
import CreateProject from "./components/projects/createProject"

function App(props) {
  
  return (
    <BrowserRouter>

    <div className="App">
    <Navlink/>
    <Switch>
     {/* <Route  path="/" component={ Navlink}/> */}
     <Route  exact path="/" component={ Dashboard}/>
     <Route  path="/signin" component={ Signin} />
     <Route  path="/signup" component={ Signup} />
     <Route  path="/createproject" component={CreateProject} />

     <Route  path="/project/:id" component={ ProjectDetails} />


    </Switch>
     
     </div>
     </BrowserRouter>
  );
}

export default App;
