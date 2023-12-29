const express = require("express")
const { createNewOrder, getAllOrder, getAllOrderByCustomerID, getAllOrderBySalesEmployeeID, getAllOrderByPruductID } = require("../Controllers/orderController")
const Router = express.Router()

Router.get("/", getAllOrder)
Router.post("/", createNewOrder)
Router.get("/customerID/:customerID", getAllOrderByCustomerID)
Router.get("/salesEmployeeID/:salesEmployeeID", getAllOrderBySalesEmployeeID)
Router.get("/PruductID/:PruductID", getAllOrderByPruductID)


module.exports = Router