const express=require('express');
const path=require('path');

const rootDir=require('../util/path.js');//my own imported file of path

const router=express.Router();

console.log("entered into contact us html");
//admin/add-product =>GET
router.get('/contactus',(req,res,next)=>{
    console.log("entered into get request");
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
})

//admin/add-product =>POST
router.post('/success',(req,res,next)=>{
    res.send('Form Filled Successfully');
    res.redirect('/');
})

module.exports=router;