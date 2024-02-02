const { User } = require("../db/models/userModel");
const jwt = require("jsonwebtoken");


const requireAuth = async (req,res,next)=>{
        const { authorization }  = req.headers;

        if(!authorization){
            res.status(401).json({Error:"Authorization required"});
        }

        const token = authorization.split(' ')[1];
        console.log(token);

        try{
            
        const {_id }  = jwt.verify(token,process.env.JWT_SECRET);
        const user = await User.findOne({_id}).select('_id');
         
         req.user_Id = user._id;
         next();

        }catch(e){
            return res.status(403).json({msg:e.message});
        }    
}

module.exports = { requireAuth }