import { combineReducers } from "redux"
import { authReducer } from "./auth/auth"
import { cart } from "./cart/cart.reducer"
import { products } from "./product/product"




const rootReducer = combineReducers({
    products: products,
    cart: cart,
    auth: authReducer
})

export default rootReducer