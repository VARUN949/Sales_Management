const express = require("express")
const { handleGetAllSalesEmployees } = require("../Controllers/SalesEmployeeController")

const Router = express.Router()

Router.get("/", handleGetAllSalesEmployees)

module.exports = Router