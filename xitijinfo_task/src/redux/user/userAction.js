import { USER_LOGIN, USER_SIGNUP } from "./userType"

export const login = () => {
    return {
        type: USER_LOGIN,
        payload: true,
    }
}

export const signup = (payload) => {
    return {
        type: USER_SIGNUP,
        payload,
    }
}

export const loginMiddleware = () => {
    return (dispatch) => {
        dispatch(login());
    }
}

export const signupMiddleware = (data) => {
    return (dispatch) => {
        dispatch(signup(data));
    }
}