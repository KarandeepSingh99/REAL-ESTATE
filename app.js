require('dotenv').config()

const express=require("express");
// J0e09v7KtL9NEwOK
//karan
const app=express();
// const PORT=process.env.PORT || 6000;
const PORT=process.env.PORT;
const mongoose = require("mongoose");

const cors = require("cors");

require("./models/location")
require("./models/general")

app.use(cors())

app.use(express.json());


app.use(require("./routes/location"))
app.use(require("./routes/general"))

mongoose.connect(process.env.MONGODB_URL);

mongoose.connection.on("connected", () => {
    console.log("Congrats!!successfully connected to mongodb")
})

mongoose.connection.on("error", () => {
    console.log("not connected to mongodb")
})


app.listen(PORT,"localhost",()=>{
    console.log("server running on " + PORT);
})