const express = require('express')
const app = express()
const port = 5000
const connectDb = require('./config/connect')
const User=require("./models/User")
require("dotenv").config({path:"./config/.env"});


const create=async()=>{
  try {
    const user1=  await User.insertMany([{name:"Ahmed",age:50},{name:"aymen",age:12},{name:"mohamed",age:15}])
    console.log(user1) 
  
    console.log("user create success");
} catch (error) {
    console.log(error)
}}

app.use(express.json())

//method get
app.get('/', async(req, res) => {
 try {
      const user2=  await User.find()
      console.log(user2) 
      res.send({msg:user2})
      
  } catch (error) {
      console.log(error)
  }
})

//method post
app.post('/add', async(req, res) => {
  try {
      const newUser=  new  User({
        name:req.body.name,
        age:req.body.age
      })
    await newUser.save()
      
      res.send({msg:"add success"} )
    console.log("add succes");
  
  } catch (error) {
      console.log(error)
  } 
    
})

//method put
app.put('/update/:id', async(req, res) => {

    try {
      const user2=  await User.updateOne({_id:req.params.id}, { age:52 })
        res.send({msg:user2} )
        console.log("update succes");
  } catch (error) {
      console.log(error)
      res.status(400).send({msg:" aleardy update "})
  }  
  
})

//method delete 
app.delete('/:id', async(req, res) => {
  try {
      const user2=  await User.deleteOne({_id:req.params.id})
       
         res.send({msg:user2})
      console.log("delete succes");
  } catch (error) {
      console.log(error)
  }
 
})

connectDb()
create()

app.listen(port, () => 
console.log(`app listening on port ${port}!`))