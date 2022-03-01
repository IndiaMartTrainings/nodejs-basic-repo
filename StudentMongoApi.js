const express = require("express")
const app = express()
const router = express.Router()
const mongoose = require('mongoose')
const Student = require("./models/StudentModel")

mongoose.connect("mongodb://localhost:27017/studentdb", (err)=>{
    if(err){
        throw err
    } else {
        console.log(`Connected to MongoDB successfully !!!`)
    }
})

router.get("/", (req, res)=>{
    res.json("Welcome to student API")
})

router.get("/students", (req, res) => {
    Student.getStudents((err, data)=>{
        if(err){
            throw err
        }
        res.json(data)
    })
})

app.use("/api", router)

const PORT = 3001

app.listen(PORT, (req, res) => {
    console.log(`Server is listening at PORT ${PORT}`)
})