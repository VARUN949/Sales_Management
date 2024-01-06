const express = require('express')
const { generatBill } = require("../Controllers/billGeneratorController")

const Router = express.Router()

Router.post("/", generatBill)

module.exports = Router