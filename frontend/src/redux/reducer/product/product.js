
import { Productconst } from "../../constant"

const initstate = {
    newArrive: [],
    menProduct: [],
    womenProduct: [],
    allProduct: [],
    oneProduct: [],
    loading: false,
    err: undefined
}
export const products = (state = initstate, action) => {
    switch (action.type) {
        case Productconst.GETPRODUCT_REQUEST:
            return { ...state, loading: true }
        case Productconst.GETPRODUCT_SUCESS:
            return { ...state, loading: false, newArrive: action.payload }
        case Productconst.GETPRODUCT_SUCESS_ALL:
            return { ...state, loading: false, allProduct: action.payload }
        case Productconst.GETONEPRODUCT: {
            let getItem = state.allProduct.filter((item) => item._id == action.payload)
            return { ...state, oneProduct: getItem[0] }
        }

        default:
            return state
    }
}