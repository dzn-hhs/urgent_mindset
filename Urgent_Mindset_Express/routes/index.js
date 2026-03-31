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
    console.log(`The output is ${name} ${email} ${phone}`)
    
    res.render('index.pug');
});
module.exports = router;