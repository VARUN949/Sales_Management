const express = require("express")
const { handleGetAllSalesEmployees, getSalesEmployeeByID } = require("../Controllers/SalesEmployeeController")

const Router = express.Router()

Router.get("/", handleGetAllSalesEmployees)
Router.post("/id", getSalesEmployeeByID)


module.exports = Router