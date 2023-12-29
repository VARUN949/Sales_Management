const express = require("express")
const { handleAddProuct, handleGetAllProduct, handleDeletProduct } = require("../Controllers/productController")



const router = express.Router()

router.post("/", handleAddProuct)
router.get("/", handleGetAllProduct)
router.delete("/:productID", handleDeletProduct)


module.exports = router 