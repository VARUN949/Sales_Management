const express = require("express")
const { handleAddCustomer, handleGetAllCustomers } = require("../Controllers/cutomerController")
const Router = express.Router()

Router.post("/", handleAddCustomer)
Router.get("/", handleGetAllCustomers)

module.exports = Router