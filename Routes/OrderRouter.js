const express = require("express")
const { createNewOrder, updateOrderStatus, getAllOrder, getAllOrderByCustomerID, getAllOrderBySalesEmployeeID, getAllOrderByPruductID, deleteOrder } = require("../Controllers/orderController")
const Router = express.Router()

Router.get("/", getAllOrder)
Router.post("/", createNewOrder)
Router.post("/customerID/", getAllOrderByCustomerID)
Router.post("/salesEmployeeID/", getAllOrderBySalesEmployeeID)
Router.post("/PruductID/", getAllOrderByPruductID)
Router.put("/:id", updateOrderStatus)
Router.delete("/byid", deleteOrder)




module.exports = Router