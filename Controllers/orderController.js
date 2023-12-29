const Orders = require("../models/OrderModel")

async function createNewOrder(req, res) {
    const body = req.body
    if (!body.customerID || !body.salesEmployeeID || !body.PruductID || !body.approvalFromSaleEmployee || !body.Qunity) {
        return res.status(400).json({ message: "missing data" })
    }
    if (typeof (req.body.approvalFromSaleEmployee) !== "boolean") {
        return res.status(400).json({ message: "wrong data" })
    }
    await Orders.create({
        customerID: body.customerID,
        salesEmployeeID: body.salesEmployeeID,
        PruductID: body.PruductID,
        approvalFromSaleEmployee: body.approvalFromSaleEmployee,
        Qunity: body.Qunity
    })
    return res.status(200).json({ message: "success" })
}

async function getAllOrder(req, res) {
    const AllOrders = await Orders.find()
    return res.status(200).json(AllOrders)
}

async function getAllOrderByCustomerID(req, res) {
    const orders = await Orders.find({ customerID: req.params.customerID })
    if (orders.length == 0) return res.status(400).json({ message: "orders not found" })
    console.log(orders);
    return res.status(200).json(orders)
}

async function getAllOrderBySalesEmployeeID(req, res) {
    const orders = await Orders.find({ salesEmployeeID: req.params.salesEmployeeID })
    if (orders.length == 0) return res.status(400).json({ message: "orders not found" })
    console.log(orders);
    return res.status(200).json(orders)
}

async function getAllOrderByPruductID(req, res) {
    const orders = await Orders.find({ PruductID: req.params.PruductID })
    if (orders.length == 0) return res.status(400).json({ message: "orders not found" })
    console.log(orders);
    return res.status(200).json(orders)
}

module.exports = { createNewOrder, getAllOrder, getAllOrderByCustomerID, getAllOrderBySalesEmployeeID, getAllOrderByPruductID }