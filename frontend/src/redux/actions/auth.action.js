import axios from "axios"
import { Productconst } from "../constant"


const baseUrl = "https://e-commerce-m.herokuapp.com/api";


const axiosInstance = axios.create({
    baseURL: baseUrl,
    // headers: {
    //     'Authorization': token ? `Bearer ${token}` : ''
    // }
})




export const register = (user, notify, navigate) => (dispatch) => {

    axiosInstance.post("/register", user).then((res) => {
        notify("✔ Register sucess")
        dispatch({ type: Productconst.REGISTER_SUCESS, payload: res.data })
        navigate("/login")
    }).catch((e) => {
        notify("⚠ " + e.response.data.mess)
        dispatch({ type: Productconst.REGISTER_fale, payload: e.response.data.mess })
    })

}

export const login = (user, notify, navigate) => (dispatch) => {

    axiosInstance.post("/login", user).then((res) => {
        notify("✔ login sucess")
        const { username, email, token, ...other } = res.data
        localStorage.setItem("user", JSON.stringify({ username, email, token }))
        dispatch({ type: Productconst.LOGIN_SUCESS, payload: { username, email, token } })
        navigate("/")
    }).catch((e) => {
        notify("⚠ " + e.response.data.mess)
        dispatch({ type: Productconst.LOGIN_fale, payload: e.response.data.mess })
    })

}

export const Islogin = (toast) => (dispatch) => {
    let local = JSON.parse(localStorage.getItem("user"))
    if (local && local.token) {
        let { username, email, token } = local
        dispatch({ type: Productconst.LOGIN_SUCESS, payload: { username, email, token } })
        toast.success(`wlecome ${username}`)

    } else {
        dispatch({ type: Productconst.LOGIN_fale, payload: " you should login in" })
    }

}
export const logout = (toast) => (dispatch) => {
    localStorage.removeItem("user");
    dispatch({ type: Productconst.LOGOUT })
    toast.success("Bye Bye")

}