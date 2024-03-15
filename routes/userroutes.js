const express=require('express');

const home=require('../countroller/usercontroller');
const router=express.Router;

router.get('/home',home);

module.export= router;
