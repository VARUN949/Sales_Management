const express = require("express")
const { handleAddProuct, getProductID, handleGetAllProduct, handleDeletProduct, updateProductStatus } = require("../Controllers/productController")



const router = express.Router()

router.post("/", handleAddProuct)
router.post("/id", getProductID)
router.get("/", handleGetAllProduct)
router.delete("/:productID", handleDeletProduct)
router.put("/:id", updateProductStatus)


module.exports = router 