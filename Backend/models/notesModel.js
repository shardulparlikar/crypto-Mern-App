const mongoose = require("mongoose")

const notesSchema =  new mongoose.Schema( {
id : { 
    type :  String,
    require : true 
},
title : {
    type : String,
    require : true
},
symbol: {
    type : String,
    require : true
} ,
mCap : {
    type : Number,
    require : true
} ,
price : {
    type : Number,
    require : true
},
image : { 
    type : String ,
    require : true 
}



})
const Note = mongoose.model("notes",notesSchema)
module.exports = Note ;