const mongoose=require("mongoose")


const userSchema= new mongoose.Schema({
    name :{type:String,require:true},
    age:{type:Number} 
})

const User=mongoose.model("poeple",userSchema)
module.exports=User
 