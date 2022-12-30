const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const GENERAL = mongoose.model("GENERAL");

router.get("/", (req, res) => {
    res.send("hello from general server")
})

router.get("/generalinfo", (req, res) => {
    console.log("hello console general")
    res.send("response from general server")
})

router.post("/generalinfo", (req, res) => {
    const { name, mobile, postedby, saletype, featuredpackage, ppdpackage, pic } = req.body;

    if (!name || !postedby) {
        return res.status(422).json({ error: "please add name and postedby" })
    }

    GENERAL.findOne({ name: name }).then((user) => {
        if (user) {
            return res.status(422).json({ error: "Property already exists with that name" });
        }


        const general = new GENERAL({
            name,
            mobile,
            postedby,
            saletype,
            featuredpackage,
            ppdpackage,
            photo: pic
        })

        general.save().then(general => { res.json({ message: "congrats!!!!!!!!!!!!" }) })
            .catch(err => { res.json({ error: err }) })

    })
})

module.exports = router;