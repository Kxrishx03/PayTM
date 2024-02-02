const { User } = require("../models/userModel");
const bcrypt = require('bcrypt');
const zod = require("zod");
const jwt = require("jsonwebtoken");



const createToken = (id)=>{
        return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn:'5d'});
}

const userSchema = zod.object({
    username:zod.string().min(5),
    firstname:zod.string().max(50),
    lastname:zod.string().max(50),
    password:zod.string().min(6),

});


const signupUser = async (req,res) =>{

    const {username,firstname,lastname,password} = req.body;
    
    const {success,error} = userSchema.safeParse(req.body);

    if(!success){
         res.status(401).json({Error:error});
    }

    const exits = await User.findOne({username});
    if(exits){
        res.status(411).json({msg:"Username already in use"});
    }
     
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt); 
    
    const user = await User.create({username,firstname,lastname,password:hash});
    const token = createToken(user._id);
    res.status(200).json({username,token});   

    }


const loginUser = async (req,res) =>{
      
    const {username,password} = req.body;
    
    const user = await User.findOne({username});
    if(!user){
        res.status(411).json({msg:"Username doesn't exits"});
    }

    const match = await bcrypt.compare(password,user.password);

    if(!match){
        res.status(411).json({msg:"Wrong Password"});
    }
    const token = createToken(user._id);
    res.status(200).json({token});
}

module.exports = {
    signupUser,
    loginUser
}