const express = require("express")
const { handleGetAllSalesEmployees, getSalesEmployeeByID, getSalesEmployeeByCity, deleteSalesEmployee } = require("../Controllers/SalesEmployeeController")

const Router = express.Router()

Router.get("/", handleGetAllSalesEmployees)
Router.post("/id", getSalesEmployeeByID)
Router.post("/city", getSalesEmployeeByCity)
Router.delete("/byid", deleteSalesEmployee)




module.exports = Router