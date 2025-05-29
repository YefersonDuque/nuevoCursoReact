import { Types } from "../types";
export const authReducer = (authstate, action) => {


    switch (action.type) {
        case Types.login:
            return {
                ...authstate,
                logged: true,
                user: action.payload
            }
        case Types.logout:
            return {
                logged: false
            }
        default:
            return authstate;
    }

}