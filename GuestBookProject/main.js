var express = require("express");
var app = express();
var ejs = require("ejs");
var session = require("express-session");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);

app.use(session({
	secret : "shineekey", // 암호화 키 
	resave : false,
	saveUninitialized : false
}));

var router = require("./router/controller")(app);

var server = app.listen(5555, function(){
	console.log("우리 서버 정상영업 합니다");
});

