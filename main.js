const nodemailer = require('nodemailer');
require('dotenv').config();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ADDRESS,// your_email_address@gmail.com
        pass: process.env.PASSWORD // your_app_password
    }
});

let mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.RECEPIENT_EMAIL,
    subject: 'Email Subject',
    text: 'Email Body'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
