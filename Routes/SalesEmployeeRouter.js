const express = require("express")
const { handleAddSalesEmployees, handleGetAllSalesEmployees } = require("../Controllers/SalesEmployeeController")

const Router = express.Router()

Router.get("/", handleGetAllSalesEmployees)
Router.post("/", handleAddSalesEmployees)

module.exports = Router