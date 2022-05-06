import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import e, { urlencoded } from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017/loginDB",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB connect");
  }
);

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  dob: String,
  email: String,
});

const User = new mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("My api");
});

app.post("/login", (req, res) => {
const{ email,password}=req.body;
User.findOne({email:email},(err,user)=>{
if(user){
  if(password==user.password){
    res.send({message:"User Logged IN"})
  }else{
    res.send({message:"Wrong Password"})
  }
}else{
  res.send({message:"No such user data availabe"})
}
})
});



app.post("/register", (req, res) => {
  const { name, email, dob, password } = req.body;

   User.findOne({email:email},(err,user)=>{
if(user){

res.send({message:"User was already there"})

  
   

   }else{

    const user = new User({
        name: name,
        email: email,
        dob: dob,
        password: password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({message:"New data added"});
        }
      });}})})



   
  

app.listen(9002, () => {
  console.log("Server started at 9002");
})
