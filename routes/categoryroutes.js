const express=require('express');
const {catform,savecatData,deletecatData,editcatData}=require("../countroller/categorycontroller")
const router=express.Router();
const main=require('../models/dbconflicg')
const bodyParser=require('body-parser')
var urlencodedParser=bodyParser.urlencoded({extended:false})
router.get("/",catform);
router.post("/savecat",urlencodedParser,savecatData);
router.get("/deletecat:id",deletecatData);
router.get("/editcat:id",editcatData);

module.exports=router
