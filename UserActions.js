import axios from "axios";

export function loginUser(data) {
  return {
    type: "SET_LOGIN_STATE",
    payload: axios
      .post(`/api/login`, data, { withCredentials: true })
      .then(resp => console.log(resp))
      .catch(err => console.log("an error ocurred while loggin in.", err))
  };
}

export function loginStatus() {
  return {
    type: "CHECK_LOGIN_STATE",
    payload: axios
      .get(`/api/login/current`, { withCredentials: true })
      .then(resp => {
        console.log("this be the one", resp.data);
        if (typeof resp.data === "object" && resp.data !== null) {
          return { response: true, user: resp.data };
        } else {
          return { response: false };
        }
      })
      .catch(err => {
        console.log("no user logged in", err);
        return false;
      })
  };
}

export function logoutUser() {
  return {
    type: "SET_LOGOUT_STATE",
    payload: axios
      .get(`/api/login/logout`, { withCredentials: true })
      .then(resp => console.log(resp))
      .catch(err => console.log("an error ocurred", err))
  };
}
