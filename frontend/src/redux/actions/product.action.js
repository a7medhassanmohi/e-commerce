import { Productconst } from "../constant"
import axios from "../api"

export const getNewproduct = (user) => (dispatch) => {
    dispatch({ type: Productconst.GETPRODUCT_REQUEST })
    axios.get("/getproduct?newArr=1")
        .then((res) => {
            dispatch({ type: Productconst.GETPRODUCT_SUCESS, payload: res.data })


        }).catch((e) => {

        })
}

export const getCatgeoryProduct = (setitem2) => (dispatch) => {
    dispatch({ type: Productconst.GETPRODUCT_REQUEST })
    axios.get(`/getproduct`)
        .then((res) => {


            dispatch({ type: Productconst.GETPRODUCT_SUCESS_ALL, payload: res.data })
            setitem2(res.data)



        }).catch((e) => {

        })
}
export const getoneProduct = (id) => (dispatch) => {
    dispatch({ type: Productconst.GETONEPRODUCT, payload: id })
}