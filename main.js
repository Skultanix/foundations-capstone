const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()
app.use(cors())
app.use(express.json())

///Endpoint setup

app.get("/", function (req,res){
    res.sendFile(path.join(__dirname,"/public/index.html"))
})


app.get("/styles", function (req,res){
    res.sendFile(path.join(__dirname,"/public/index.css"))
})

app.get("/script", function (req,res){
    res.sendFile(path.join(__dirname,"controller.js"))
})


//function

const port = process.env.PORT || 6969

app.listen(port, () => {
    console.log(`Port ${port} locked and loaded.`)
})