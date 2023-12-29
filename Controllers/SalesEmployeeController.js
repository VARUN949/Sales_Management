const SalesEmployees = require("../models/SalesEmployeeModel.js")


async function handleAddSalesEmployees(req, res) {
    const body = req.body;
    if (!body.name || !body.password || !body.email || !body.role) return res.status(400).json({ error: "data missing" });
    const result = await SalesEmployees.findOne({ email: body.email });
    if (result !== null) return res.status(400).json({ error: "admin emailid already used" })
    if (body.role !== "salesEmployee") return res.status(400).json({ error: "role is different" })
    await SalesEmployees.create({
        name: body.name,
        password: body.password,
        email: body.email,
        role: body.role
    });
    return res.status(200).json({ "message": "success" });
}

async function handleGetAllSalesEmployees(req, res) {
    const allSalesEmployees = await SalesEmployees.find();
    return res.status(200).json(allSalesEmployees)
}

module.exports = { handleAddSalesEmployees, handleGetAllSalesEmployees }