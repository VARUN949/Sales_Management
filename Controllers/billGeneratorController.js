const fs = require('fs');

async function generatBill(req, res) {

    if (!req.body.orderId || !req.body.productId || !req.body.customerId || !req.body.SalesEmployeeId || !req.body.quntity || !req.body.price || !req.body.totalPrice) return res.status(400).json({ message: "data not found" })
    const fs = require('fs');
    const content = `Product Name        :-${req.body.productName}\nProduct Id          
    :-${req.body.productId}\nCustomer Id         :-${req.body.customerId}\nSalesEmployee Id    
    :-${req.body.SalesEmployeeId}\nQuntity             :-${req.body.quntity}\nprice               
    :-${req.body.price}\ntotal price         :-${req.body.totalPrice}\n`
    fs.writeFile(`./Bills/${req.body.orderId}.txt`, content, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            res.status(200).json({ mess: "bill successfully generate" })
        }
    });
}


module.exports = { generatBill }