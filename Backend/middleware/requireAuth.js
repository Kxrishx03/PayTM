const { User } = require("../db/models/userModel");
const jwt = require("jsonwebtoken");


const requireAuth = async (req,res,next)=>{
        const { authorization }  = req.headers;

        if(!authorization){
            res.status(401).json({Error:"Authorization required"});
        }

        const token = authorization.split(' ')[1];
        console.log(token);

        const {_id }  = jwt.verify(token,process.env.JWT_SECRET);

        const existsUser = await User.findOne({_id}).select('_id');

        if(!existsUser){
            res.status(400).json({msg:"Invalid login"});
        }

        next();
       
}

module.exports = { requireAuth }