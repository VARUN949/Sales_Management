const Customer = require("../models/CustomerModel")

async function handleAddCustomer(req, res) {

    const body = req.body;
    if (!body.name || !body.password || !body.email) return res.status(400).json({ error: "data missing" });
    const result = await Customer.findOne({ email: body.email });
    if (result !== null) return res.status(400).json({ error: "customer emailid already used" })

    await Customer.create({
        name: body.name,
        password: body.password,
        email: body.email,
        role: "customer"
    });

    return res.status(200).json({ "message": "success" });
}

async function handleGetAllCustomers(req, res) {
    const allProducts = await Customer.find();
    return res.status(200).json(allProducts)
}

module.exports = { handleAddCustomer, handleGetAllCustomers }