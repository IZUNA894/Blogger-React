import React from "react"
import {Link} from "react-router-dom";
import { format } from 'date-fns';

class App extends React.Component{
    render(){
        var projects = this.props.projects;
        var ProjectSummary = projects.map((item)=>{
            var data = item.createdAt.seconds || item.createdAt;
            var date= new Date(data*1000);
            var result = format(date, 'Do-MMM-yyyy');
            
            return(<Link to={"/project/" + item.id } key={item.id} >
                    <div className="card z-depth-0 project-summary" >
                        <div className="card-content grey-text  text-darken-3">
                            <span className="card-title">{item.title}</span>
                            <p className="">{item.content}</p>
                            
                            <p className="">Posted by {item.firstName + " " + item.lastName}</p>
                            <p className="grey-text">{result}</p>
                        </div>
                    </div>
                </Link>
            )
        })

        return(
            <div className="project-list section">

                
                {ProjectSummary}

            </div>
        )
    }
}

export default App;