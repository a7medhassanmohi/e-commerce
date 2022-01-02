const app = require("express").Router()
const User = require("../model/User")
const Product = require("../model/Product")
const Order = require("../model/Order")
const Cart = require("../model/Cart")


app.post("/creatuser", (req, res) => {
    res.send("hi from user")
})
app.put("/updateuser", (req, res) => {
    res.send("hi from updateuser")
})
app.delete("/deleteuser", (req, res) => {
    res.send("hi from deleteuser")
})
app.get("/getuser", (req, res) => {
    res.send("hi from getuser")
})



module.exports = app