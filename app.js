const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const {MONGOURL} = require("./config/keys")
const User = require("./models/user")

const authrouter = require("./routes/auth");
const postrouter = require("./routes/post");
const userrouter = require("./routes/user")

//connecting
mongoose.connect(MONGOURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then((data)=>{
        console.log("connected to db");
    })
    .catch((err)=>{
        console.log(err);
    })

//middleware
app.use(express.json());
app.use(authrouter);
app.use(postrouter);
app.use(userrouter);

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"))
    const path = require("path")
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

//listiner
app.listen(PORT,console.log("server is running at",PORT));