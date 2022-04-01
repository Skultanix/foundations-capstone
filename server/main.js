const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()
app.use(cors())
app.use(express.json())

///Endpoint setup
app.use(express.static(path.join(__dirname, "../public")))

app.get("/script", function (req,res){
    res.sendFile(path.join(__dirname,"controller.js"))
})

const port = process.env.PORT || 6969

app.listen(port, () => {
    console.log(`Port ${port} locked and loaded.`)
})