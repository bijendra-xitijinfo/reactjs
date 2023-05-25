import { USER_LOGIN, USER_SIGNUP } from "./userType";

const initialValues = {
    login: false,
    user: []
}
export const userRouter = (state = initialValues, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return { ...state, login: action.payload }
        case USER_SIGNUP:
            return { ...state, user: [...state.user, action.payload] }
        default:
            return state
    }
}