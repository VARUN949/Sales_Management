const express = require("express")
const { getCustomersByID, handleGetAllCustomers, getCustomersByCity, deleteCustomer } = require("../Controllers/cutomerController")
const Router = express.Router()

Router.get("/", handleGetAllCustomers)
Router.post("/id", getCustomersByID)
Router.post("/city", getCustomersByCity)
Router.delete("/byid", deleteCustomer)


module.exports = Router