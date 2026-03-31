const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.use(express.json()); // For parsing application/json
router.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

//Routes
router.get('/',(req,res)=>{
    
    res.render('index.pug');
});

router.post('/form_submit', (req,res)=>{
    const {name, email, phone} = req.body;
    
    // Create a test account or replace with real credentials.
    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
        user: process.env.SENDER_USER,
        pass: process.env.SENDER_PASS,
        },
    });
    const info = transporter.sendMail({
        from: `"Urgent Mindset Website" <${process.env.SENDER_USER}>`,
        to: process.env.SENDER_USER,
        subject: `Urgent Mindset Call Request`,
        // text: "Hello world?", // plain‑text body
        html: `
        <h1> Someone Booked a Call with Urgent Mindset!</h1>
        <p><b>Name:</b> ${name} <p/>
        <p><b>Email:</b> ${email} <p/>
        <p><b>Phone Number:</b> ${phone} <p/>
        `, // HTML body
        
    },(error, info) => {
        res.redirect('/');
        if (error) {
            console.error("Error occurred:", error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
            
    
});
module.exports = router;