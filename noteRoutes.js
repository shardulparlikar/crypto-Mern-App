const express = require("express");
const router = express.Router();

const reciveData = require("../models/notesModel")



require('../app')
 const User= require("../models/notesModel") 






router.post('/register',(req,res)=>{

    const {id,title , symbol,mCap,price,image} = req.body;

     User.findOne({id : id }).then((userExits)=>{
         if(userExits){
             return res.status(422).json({error : "Coin already Exists"})
         }
        const user =new User({id,title , symbol,mCap,price,image})

        user.save().then(()=>{
            res.status(201).json({message : "Data Stored Succesfuly"})
        }).catch((err)=>res.status(500).json({error : "Faiiled"}))
     }).catch(err =>{console.log(err)})


})

router.get("/recive",function(req,res){
    console.log("Get requst")
    reciveData.find({})
    .exec(function(err,rData){
        if (err){
            console.log("error retriving data")
        }else{
            res.json(rData)
        }
    })
})

router.delete('/register/:id', function(req,res){
console.log("deleting a crypto ")
User.findByIdAndDelete(req.params.id,function(err,deleteCrypto){
if(err){
    res.send("error deleting crypto")
}
else{
    res.json(deleteCrypto);
}
})
})





module.exports = router;
