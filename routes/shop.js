const express=require('express');
const path=require('path');

const rootDir=require('../util/path.js');//my own file imported of path file

const router=express.Router();

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
})

module.exports=router;