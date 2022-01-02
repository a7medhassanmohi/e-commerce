
import { Productconst } from "../../constant"

const initstate = {
    user: {},
    mess: "",
    authanticate: false

}
export const authReducer = (state = initstate, action) => {
    switch (action.type) {
        case Productconst.REGISTER_SUCESS:
            return { ...state, mess: "register success" }
        case Productconst.REGISTER_fale:
            return { ...state, mess: action.payload }
        case Productconst.LOGIN_SUCESS:
            return { ...initstate, mess: "Login success", user: action.payload, authanticate: true }
        case Productconst.LOGIN_fale:
            return { ...initstate, }
        case Productconst.LOGOUT:
            return { ...initstate, }

        default:
            return state
    }
}