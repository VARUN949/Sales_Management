const express = require("express")
const { handleCheckAdmin } = require("../Controllers/LoginControllers/adminLoginControllers")
const { handleCheckCustomer } = require("../Controllers/LoginControllers/customerLoginController")
const { handleCheckSalesEmployee } = require("../Controllers/LoginControllers/salesEmployeeController")
const Router = express.Router()

Router.get('/customer', handleCheckCustomer)
Router.get('/salesEmployee', handleCheckSalesEmployee)
Router.get('/admin', handleCheckAdmin)

module.exports = Router