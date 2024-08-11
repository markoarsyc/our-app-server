const express = require("express");
const cors = require('cors');
const app = express();

const mongoose = require("mongoose");

//models
const Cartoon = require("./models/cartoon.model.js");

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
const cartoonRoute = require("./routes/cartoon.route.js");
app.use("/api/cartoons", cartoonRoute);

app.get("/",(req,res)=>{
    res.send("Default route");
})

mongoose.connect("mongodb+srv://markoarsyc:pYP9LUdXOZGWPQuV@cartoons.0f9vm.mongodb.net/?retryWrites=true&w=majority&appName=Cartoons")
.then(()=>{
    console.log("Connected to database");
    app.listen(3006, ()=>{
        console.log("Server is running on port 3006");
    })
}).catch(()=>{
    console.log("Unable to connect to database");
})

