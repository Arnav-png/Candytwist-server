const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const ScoreSchema = require("./Model/model")

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://candytwist:candytwist@candytwist.1qjyw.mongodb.net/Candytwist?retryWrites=true&w=majority",{
    useNewUrlParser:true
})

app.get("/scoreBoard",async(req,res)=>{
    
    ScoreSchema.find({},(err,result)=>{
        if(err){
            res.send("something went wrong!")
            console.log(err)
        }
        res.send(result)
    })
})

app.post("/score",async(req,res)=>{
    let {Username , Score} = req.body

    var score = new ScoreSchema({
        Username:Username,
        Score:Score
    })

    try {
        await score.save();
        res.send("score saved successfully")
    } catch (error) {
        res.send("something went wrong")
        console.log(error)
    }
})

app.listen(3001,()=>{
    console.log("app listening on port 3001")
})

