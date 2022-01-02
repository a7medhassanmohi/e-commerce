const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const env = require("dotenv")
const userRoute = require("./route/user")
const productRoute = require("./route/product")
const orderRoute = require("./route/order")
const cartRoute = require("./route/cart")
const authRoute = require("./route/auth")
const stripRoute = require("./route/strip")

env.config()
app.use(express.json())
app.use(cors())


mongoose.connect(process.env.MOGOURL).then(() => {
    console.log("database is running");
}).catch((e) => {
    console.log(e.message);
})


// route

app.use("/api", userRoute)
app.use("/api", cartRoute)
app.use("/api", orderRoute)
app.use("/api", productRoute)
app.use("/api", authRoute)
app.use("/api", stripRoute)



app.listen(process.env.PORT || 4000, () => {
    console.log("app is running ");
})
