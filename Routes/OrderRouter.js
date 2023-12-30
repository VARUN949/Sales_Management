const express = require("express")
const { createNewOrder, getAllOrder, getAllOrderByCustomerID, getAllOrderBySalesEmployeeID, getAllOrderByPruductID } = require("../Controllers/orderController")
const Router = express.Router()

Router.get("/", getAllOrder)
Router.post("/", createNewOrder)
Router.post("/customerID/:customerID", getAllOrderByCustomerID)
Router.post("/salesEmployeeID/", getAllOrderBySalesEmployeeID)
Router.post("/PruductID/", getAllOrderByPruductID)


module.exports = Router