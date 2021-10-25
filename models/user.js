const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    },
    pic:{
        type:String,
        default:"https://res.cloudinary.com/santynitin/image/upload/v1635090570/93226cf291a59b55052251fe64bee33f3ade327e_iuuumo.png"
    }
    ,followers:[{
        type:ObjectId,
        ref:"User"
    }],
    following:[{
        type:ObjectId,
        ref:"User"
    }]
})

const User = mongoose.model("User",userSchema);

module.exports = User;