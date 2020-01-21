import placeholder from "../placeholder.js";

var initialState= placeholder();


function userReducer(state = initialState, action) {
    switch (action.type) {
    //   case SET_VISIBILITY_FILTER:
    //     return Object.assign({}, state, {
    //       visibilityFilter: action.filter
    //     })
      default:
        return state
    }
  }
  export default userReducer;