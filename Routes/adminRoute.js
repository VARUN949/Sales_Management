const express = require("express")
const { handleGetAllEdmins } = require("../Controllers/adminController")

const Router = express.Router()

Router.get("/", handleGetAllEdmins)

module.exports = Router