const bodyParser = require("body-parser");
const express = require("express");
const app = express();

// bodyParser works with express
app.use(bodyParser.urlencoded({extended: true}));

// Home
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  console.log(req.body);
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var sum = num1 + num2;
  res.send("The result of your application is " + sum);
});

// bmicalculator
app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
  console.log(req.body);
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height * height);
  res.send("Your BMI is " + bmi);
});


app.listen(3000, function(){
  console.log("Server is started on port 3000");
});
