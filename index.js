const express = require("express")
const app = express()

const port = 3000

app.get("/Users", (request, response)=> {
    // response.send("Welcome User");
    response.json({
        "Users":[
            {"name": "Joshua", "age": "12", "food": "rice and beans"},
            {"name": "Adekunle", "age": "13", "food": "bread and beans"},
            {"name": "Kayode", "age": "14", "food": "beans"},
            {"name": "David", "age": "15", "food": "rice"},
            {"name": "Anuoluwapo", "age": "16", "food": "Spaghetti"},
            {"name": "Victoria", "age": "17", "food": "Pasta"},
        ]
    })
})

app.get("/", (req, res) => {
res.render("index", {name:"Joshua", age: "12", food: "rice and beans"})
})

app.get("/signup", (req, res) => {
res.render("signup")
})

app.get("/login", (req, res) => {
    res.render("login")
    })

app.get("/todo", (req, res) => {
    res.render("todo", {todo:alltodo})
})

app.listen(port, () => { 
  console.log(`app started at port ${port}`)
})