import { Productconst } from "../../constant"

const initstate = {
    allcart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

}
export const cart = (state = initstate, action) => {
    switch (action.type) {
        case Productconst.ADDCART:
            if (localStorage.getItem("cart") && JSON.parse(localStorage.getItem("cart")).length > 0) {
                let localstorgeitem = JSON.parse(localStorage.getItem("cart"))
                const exist = localstorgeitem.some((it) => it._id == action.payload._id)


                console.log(exist);
                if (exist) {
                    localstorgeitem.map((it) => {
                        if (it._id == action.payload._id) {
                            return it.qty = (it.qty + action.payload.qty)
                        } else {
                            return it
                        }
                    })
                    localStorage.setItem("cart", JSON.stringify(localstorgeitem))


                } else {
                    localStorage.setItem("cart", JSON.stringify([...JSON.parse(localStorage.getItem("cart")), action.payload]))

                }


            } else {
                localStorage.setItem("cart", JSON.stringify([action.payload]))
            }

            return { ...state, allcart: [...JSON.parse(localStorage.getItem("cart"))] }

        case Productconst.REMOVECART: {
            let itemafterRemove = state.allcart.filter((it) => it._id !== action.payload)
            localStorage.setItem("cart", JSON.stringify(itemafterRemove))

            return { ...state, allcart: itemafterRemove }
        }
        case Productconst.REMOVEALLCART: {
            localStorage.setItem("cart", JSON.stringify([]))
            return { ...state, allcart: [] }
        }


        default:
            return state
    }
}

