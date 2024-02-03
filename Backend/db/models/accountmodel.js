const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const accountSchema =  new Schema({
       userId:{
        type:ObjectId,
        required:true,
        ref:'User'
       },
       balance:{
       type:Number,
       required:true,
       get: v => (v/100).toFixed(2),
       set: v => v*100
       }
}, {  toJSON: { getters: true } });



const Account = mongoose.model('Account',accountSchema);
module.exports= { Account }