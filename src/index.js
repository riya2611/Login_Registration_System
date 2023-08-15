const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const mongoose = require("mongoose");
// const morgan = require("morgan");

require("../src/db/conn");
const Register = require("./models/registers");
const { json } = require("express");
const { log } = require("console");

const port = process.env.port || 2000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("index")
});


app.get("/login", (req, res) => {
    res.render("login")
  });

app.get("/about", (req, res) => {
  res.render("about")
});

app.get("/contact", (req, res) => {
  res.render("contact")
});

app.get("/submit", (req, res) => {
  res.render("submit")
});

app.get("/register", (req, res) => {
    res.render("register")
});

//creating new user in our database
app.post("/", async(req, res) => {
    try{
        const password = req.body.password;
        const cpassword = req.body.confirm_password;
        if(password === cpassword){
            const registerEmployee = new Register({
                firstname : req.body.firstname,
                lastname : req.body.lastname,            
                email : req.body.email,
                gender : req.body.gender,
                username : req.body.username,
                age : req.body.age,
                password : req.body.password,
                confirm_password : req.body.confirm_password 
            });

            const registered = await registerEmployee.save();
            res.status(201).render("login");
        }else{
            res.send("password does not match");
        }
    }catch(error){
        res.status(400).send(error);
    }
});

app.get("/home", (req, res) => {
    // res.render("home");
    res.render("home")
    
});
//loging check
app.post("/home", async(req, res) => {
    try{
        //getting username & pass from user
        const username = req.body.username;
        const password = req.body.password;

        // checking validation
        const usercheck = await Register.findOne({username: username});
        if(usercheck.password === password){
            res.status(201).render("home");
        }else{
            res.status(201).render("login");
            // res.send.alert("Invalid password or username");
            // res.render(prompt("Invalid username or password!!"));
            // res.send(window.alert("hello"));

        }
    } catch(error){
        res.status(400).send("invalid");
        // res.render(prompt("Invalid username or password!!"));
        // res.send(alert("Hello\nHow are you?"));
        // window.alert("hello");
    }
});

app.listen(port, () =>{
    console.log(`server is running on port ${port}`);
})

