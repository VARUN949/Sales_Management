const express = require("express")
const { getCustomersByID, handleGetAllCustomers } = require("../Controllers/cutomerController")
const Router = express.Router()

Router.get("/", handleGetAllCustomers)
Router.post("/id", getCustomersByID)

module.exports = Router