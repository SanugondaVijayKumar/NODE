const path=require('path');

const rootDir=require('../util/path');

exports.contact=(req,res,next)=>{
    console.log("entered into get request");
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
}

exports.success=(req,res,next)=>{
    res.send('Form Filled Successfully');
    res.redirect('/');
}