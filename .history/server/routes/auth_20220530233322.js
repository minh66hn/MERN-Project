const express = require("express");
const router = express.Router();

const User = require("../models/User");

// @route POST api/auth/register
// @desc Register user
// @access Public

router.post('/register', async(req, res)=>{
    const {username, password} = req.body;


    //Simple validation
    if(!username || !password)
}

module.exports = router;
