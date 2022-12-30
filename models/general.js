const mongoose = require("mongoose");

const generalSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    mobile:{
       type:Number,
        required:true
    },
    postedby:{
        type:String,
         required:true
    },
    saletype:{
        type:String,
         required:true
    },
    featuredpackage:{
        type:String,
         required:true
    },
    ppdpackage:{
        type:String,
         required:true
    },
    photo:{
        type:String,
        required:true
    }
})

mongoose.model("GENERAL", generalSchema)