const express = require("express")
const { SendMail } = require("../Controllers/SendMailController")

const Router = express.Router()

Router.post("/", SendMail)

module.exports = Router
