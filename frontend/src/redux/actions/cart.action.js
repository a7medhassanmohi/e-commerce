import { Productconst } from "../constant"

export const addCart = (cart, toast) => (dispatch) => {



    dispatch({ type: Productconst.ADDCART, payload: cart })
    toast.success("item Added",)


}
export const removeitemCart = (id, toast) => (dispatch) => {



    dispatch({ type: Productconst.REMOVECART, payload: id })
    toast.success("item Removed",)


}
export const removeAllCart = (toast) => (dispatch) => {



    dispatch({ type: Productconst.REMOVEALLCART, })
    toast.success("all item Removed",)



}