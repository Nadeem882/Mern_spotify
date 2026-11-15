const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registerUser(req , res) {

    const { username , email , password , role = "user"} = req.body;
    
    
}