const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true
    },
    city:{
       type:String,
        required:true
    },
    area:{
        type:String,
         required:true
    },
    pincode:{
        type:Number,
         required:true
    },
    address:{
        type:String,
         required:true
    },
    landmark:{
        type:String,
         required:true
    },
    latitude:{
        type:Number,
         required:true
    },
    longitude:{
        type:Number,
         required:true
    }
})

mongoose.model("LOCATION", locationSchema)