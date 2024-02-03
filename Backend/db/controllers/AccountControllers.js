const { Account } = require("../models/accountmodel");
const mongoose = require('mongoose');


const getAccountBalance = async (req,res) =>{

    const {userId} = req.body;
    const account = await Account.findOne({userId});

    if(!account){
        res.status(411).json({msg:"Account doesnot exist"});
    }

    res.status(200).json({Balance:account.balance});

}

//Transaction controllers

const makeTransaction = async (req,res) =>{

    const session = await mongoose.startSession();

    session.startTransaction();

    const { amount , to } = req.body;

    const FromAccount = await Account.findOne({userId: req.user_Id}).session(session);

    if(!FromAccount || FromAccount.balance<amount){
        await session.abortTransaction();
        return res.status(400).json({Error:"You've insufficient balance"});
    }

    const ToAccount = await Account.findOne({userId:to}).session(session);

    if(!ToAccount){
        await session.abortTransaction();
        return res.status(400).json({Error:"Invalid account"});
    }

    //Make transactions

    await Account.updateOne({userId:req.userId},{
        $inc :{balance: -amount}
    }).session(session);

    await Account.updateOne({userId:to},{
        $inc :{balance: amount}
    }).session(session);

    session.commitTransaction();

    res.status(200).json({msg:"Transfer successful"});
}


module.exports = { getAccountBalance,makeTransaction }