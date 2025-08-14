const express = require("express")
const app = express()
const ejs = require("ejs")

let alluser = []
let alltodo = []


app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")


app.get("/", (request, response) => {
    response.json({
        "Users": [
            {"id":"1", "name":"Ugonna", "age":"12", "food":"Akpu"},
            {"id":"2", "name":"feranmi", "age":"16", "food":"rice"},
            {"id":"3", "name":"emmanuel", "age":"14", "food":"spag"},
            {"id":"4", "name":"ezekiel", "age":"15", "food":"garri"},
            {"id":"5", "name":"folarin", "age":"16", "food":"pounded yam"},
            {"id":"6", "name":"ayo", "age":"17", "food":"spag"},
            {"id":"7", "name":"al-wajud", "age":"19", "food":"beans"},
            {"id":"8", "name":"joshua", "age":"18", "food":"rice and beans"},
            {"name": "Joshua", "age": "12", "food": "rice and beans"},
            {"name": "Adekunle", "age": "13", "food": "bread and beans"},
            {"name": "Kayode", "age": "14", "food": "beans"},
            {"name": "David", "age": "15", "food": "rice"},
            {"name": "Anuoluwapo", "age": "16", "food": "Spaghetti"},
            {"name": "Victoria", "age": "17", "food": "Pasta"}
        ]
    })
})

app.get("/user", (req, res) => {
    res.render("index", { name: "Lola", gender: "male" })
})

app.get("/signup", (req, res) => {
    res.render("signup")
})

app.get("/login", (req, res) => {
    res.render("login")
})


app.get("/todo", (req, res) => {
    res.render("todo", { todo: alltodo })
})

app.get("/edit/:index", (req, res) => {
    const { index } = req.params
    const onetodo = alltodo[index]
    if (onetodo) {
        res.render("edit", { onetodo: onetodo, index: index })
    } else {
        res.redirect("/todo")
    }
})

app.post("/todo/edit/:index", (req, res) => {
    const { index } = req.params
    const { title, description } = req.body
    if (index >= 0 && index < alltodo.length) {
        alltodo[index] = { title, description }
    }
    res.redirect("/todo")
})

app.post("/user/signup", (req, res) => {
    alluser.push(req.body)
    res.redirect("/login")
})

app.post("/user/login", (req, res) => {
    const { email, password } = req.body
    const existuser = alluser.find((user) => user.email === email)
    if (existuser && existuser.password === password) {
        console.log("Login successful")
        res.redirect("/")
    } else {
        console.log("Invalid user")
        res.redirect("/login")
    }
})

app.post("/addtodo", (req, res) => {
    alltodo.push(req.body)
    res.redirect("/todo")
})


app.post("/todo/delete", (req, res) => {
    const { index } = req.body
    if (index >= 0 && index < alltodo.length) {
        alltodo.splice(index, 1)
    }
    res.redirect("/todo")
})

const port = 8007
app.listen(port, () => {
    console.log(`app started at port ${port}`)
})
