const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()
app.use(cors())
app.use(express.json())

///Endpoint setup
app.get("/", function (req,res){
    res.sendFile(path.join,"/public/index.html")
})

app.get("/script", function (req,res){
    res.sendFile(path.join(__dirname,"controller.js"))
})

app.post(`/api/submitFeedback`, (req,res) => {
    const {newFeed} = req.body
    res.status(200).send(newFeed)
})

const port = process.env.PORT || 6969

app.listen(port, () => {
    console.log(`Port ${port} locked and loaded.`)
})