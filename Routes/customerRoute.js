const express = require("express")
const { D, handleGetAllCustomers } = require("../Controllers/cutomerController")
const Router = express.Router()

Router.get("/", handleGetAllCustomers)

module.exports = Router