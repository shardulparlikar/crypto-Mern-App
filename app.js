const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require ("mongoose")

app.use(
    cors({
        origin:"*"
    })
)

// const Note = require("./models/notesModel")

const recieveData=require('./models/notesModel')

const DB ="mongodb+srv://shardul:1234@cluster0.atcnu.mongodb.net/mernstack?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser: true ,
    useCreateIndex : true,
    useFindAndModify : false,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connection Succesfull")


    recieveData.find({},function(err,users){
        if(err) console.log(err)
        console.log(users)
    })




}).catch((err)=>{
    console.log("no Connection ")
})


app.use(express.json()) 
app.use (require ('./routes/noteRoutes'))



app.listen(5000, function(){
    console.log("Express on local host 5000")
})