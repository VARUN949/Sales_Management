const express = require("express")
const { handleAddEdmin, handleGetAllEdmins } = require("../Controllers/adminController")

const Router = express.Router()

Router.get("/", handleGetAllEdmins)
Router.post("/", handleAddEdmin)

module.exports = Router