var initialState= {
    authErr:null
};


function authReducer(state = initialState, action) {
    
    switch (action.type) {
      case "LOGIN_SUCCESS":
            console.log(action);
            return {
                ...state,
                authErr:false,
                authMess:null
            };
      case "LOGIN_ERR":
            console.log(action.err);
            return {
                ...state,
                authErr:true,
                authMess:action.err
            }
      case "LOGOUT_SUCCESS":
            console.log(action);
            return {
                ...state,
                authErr:false,
                authMess:null
            }
      case "LOGOUT_ERR":
            console.log(action.err);
            return {
                ...state,
                authErr:true,
                authMess:action.err
            }
      case "SIGNUP_SUCCESS":
            console.log(action);
            return {
                ...state,
                authErr:false,
                authMess:null
            } 
      case "SIGNUP_ERR":
            console.log(action.err);
            return {
                ...state,
                authErr:true,
                authMess:action.err
            }            
    
      default:
        return state
    }

  }
  export default authReducer;
