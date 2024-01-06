const nodemailer = require('nodemailer');



async function SendMail(req, res) {

    const filePath = './Bills';

    if (!req.body.mail || !req.body.filename) return res.status(400).json({ message: "data missing" })
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Update with your email service provider
        auth: {
            user: 'varunthumar3333@gmail.com', // Update with your email
            pass: 'uybm wlej qkst fjqv', // Update with your password
        },
    });

    const mailOptions = {
        from: 'varunthumar3333@gmail.com', // Sender address
        to: `${req.body.mail}`, // Receiver address
        subject: 'File Attachment Test', // Email subject
        text: 'Your bill', // Email body
        attachments: [
            {
                filename: `${req.body.filename}`, // Name of the attached file
                path: `./Bills/${req.body.filename}`, // Path to the file
            },
        ],
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ message: "mail sended successfully" })
        }

        // Remove the file after sending the email
        // fs.unlink(`./Bills/${req.body.orderId}`, (unlinkErr) => {
        //     if (unlinkErr) {
        //         console.error('Error deleting the file:', unlinkErr);
        //     } else {
        //         console.log('File deleted successfully:', filePath);
        //     }
        // });
    });
}

module.exports = { SendMail }