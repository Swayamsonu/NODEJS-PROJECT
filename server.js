const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const bodyparser=require('body-parser');
const path=require('path');
const app=express();
dotenv.config({path: 'config.env'});
const PORT=process.env.PORT || 8080
app.use(morgan('tiny'));
app.use(bodyparser.urlencoded({extended:true}));
//app.set("view engine","ejs");

app.use("/css",express.static(path.resolve(__dirname,"assets/css")));
app.use("/img",express.static(path.resolve(__dirname,"assets/img")));
app.use("/js",express.static(path.resolve(__dirname,"assets/js")));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})
app.get('/add-user',(req,res)=>{
    res.sendFile(__dirname+"/views/add_user.html");
})


app.listen(3000,()=> {console.log('server is running on http://localhost:3000')});

