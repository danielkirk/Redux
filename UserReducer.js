const UserReducer = (
  state = {
    isLoggedIn: false,
    data: ""
  },
  action
) => {
  switch (action.type) {
    case "SET_LOGIN_STATE_FULFILLED":
      state = {
        isLoggedIn: true
      };
      break;
    case "CHECK_LOGIN_STATE_FULFILLED":
      state = {
        isLoggedIn: action.payload.response,
        data: action.payload.user
      };
      break;
    case "SET_LOGOUT_STATE_FULFILLED":
      state = {
        isLoggedIn: false
      };
      break;
    default:
      return state;
  }
  return state;
};
export default UserReducer;
