const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const LOCATION = mongoose.model("LOCATION");

router.get("/",(req,res)=>{
    res.send("hello from location server")
})

router.get("/locationinfo",(req,res)=>{
    console.log("hello console location")
})

router.post("/locationinfo",(req,res)=>{
    const {email,city,area,pincode,address,landmark,latitude,longitude}=req.body;
    if (!email || !city || !area || !pincode || !address || !landmark || !latitude || !longitude ) {
        return res.status(422).json({ error: "Please add email,city,area,pincode and address" });
    }

    LOCATION.findOne({$or:[{email:email},{address:address}]}).then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({ error: "Property already exists with that email and address" });
        }

        const location=new LOCATION({
            email,
            city,
            area,
            pincode,
            address,
            landmark,
            latitude,
            longitude
        })

        location.save().then(location=>{res.json({message:"Congratulations!!! Property Registered Successfully"})})
        .catch(err=>{res.json({error:err})})
    })

})

module.exports=router;
