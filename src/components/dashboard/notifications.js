import React , {Component} from  "react";
import {connect} from "react-redux";
import {format} from "date-fns";

class App extends Component{
    render(){
        var notifications = this.props.notifications;
        var ProjectSummary = notifications && notifications.map((item)=>{
//console.log(item.time.seconds);
            var data = item.time.seconds;
            var date= new Date(data*1000);
            var result = format(date, 'Do-MMM-yyyy');
            return(
                    <li key={item.id}>
                        <span className="pink-text">{item.user}</span>
                        <span>{item.content}</span>
                        <div className="grey-text note-date">
                          { result}
                        </div>
                    </li>
            )
        })
        return(
            <div className="section">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Notifications</span>
                        <ul className="notifications">
                            {ProjectSummary}

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
// function mapStateToProps(state){
//     return{
//         auth:state.auth,
//         auths:state.firebase.auth
//     }
// }
// function mapDispatchToProps(dispatch){
//     return{
//         signup:(newUser)=>dispatch(SignUp(newUser))
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(App)
export default App;