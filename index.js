const express = require("express");
const app = express();
const fs=require('fs'); 
const { send } = require("process");


app.use(express.urlencoded({ extended: true }));
app.get("/todos", function (req, res) {
  let todos = fs.readFileSync("todo.txt", "utf-8");
  res.send(todos);
});

  let todo;
app.post("/todos", function (req, res) {
  let date=req.body;
  console.log(date);

 let userdata = JSON.parse(fs.readFileSync("register.txt", "utf-8"));
 console.log(userdata[0].user)
   todo = JSON.parse(fs.readFileSync("todo.txt", "utf-8"));
  todo.push(date)
  date.user = userdata[0].user;
  console.log(todo)
//   todo.push(data);
//   console.log(todo)
//   todo.push(userdata[0].user);
  fs.writeFileSync("todo.txt", JSON.stringify(todo));
  res.send("todo created sucessfully");
});
app.get("/todos/:id", function (req, res) {
  res.send(todo[parseInt(req.params.id)]);
});
app.get("/todo", function (req, res) {
  let html = fs.readFileSync("todo.html", "utf-8");
  res.send(html);
});
app.get('/index',function(req,res){
let html=fs.readFileSync("register.html","utf-8");
res.send(html);
})
app.get("/login", function (req, res) {
  let html = fs.readFileSync("login.html", "utf-8");
  res.send(html);
});
app.post('/check',function(req,res){
    //   console.log(req.body);
let userdate=[]
 userdate.push(req.body); 
      console.log(userdate)
      let data = JSON.parse(fs.readFileSync("register.txt", "utf-8"));
    
console.log(data);
for(let i=0;i<data.length;i++){
    if (data[i].user == userdate[i].user && data[i].pass == userdate[i].pass) {
console.log(data[i])
console.log(userdate[i])
    res.send("you are loged sucessfull");
    }
    else{
    //   res.writeHead(401);
            res.send(`<h1>error invalid credinalts</h1>`);
      res.writeHead(401);
    }
}
   
      })
// })
app.post("/register",function(req,res){
    console.log(req.body);
    let userdate = req.body;
    let data = JSON.parse(fs.readFileSync("register.txt", "utf-8"));
    console.log(data)
     data.push(userdate);
    fs.writeFileSync("register.txt", JSON.stringify(data));

for(let i=0;i<data.length;i++){
    if(data[i].user==''){
           res.writeHead(422);
        res.send(`<h1>must be required ${data[i].user}</h1>`)
    
      if (data[i].pass == "") {
            res.writeHead(422);
        res.send(`<h1>must be required ${data[i].pass}</h1>`);
      }
        if (data[i].firstname == "") {
        res.writeHead(422)
            res.send(`<h1>must be required ${data[i].firstname}</h1>`);
        }
    }
     else{
res.send("you are register sucessfull");
     }
}
//   response.writeHead(404);
//   response.write("<h1>not found</h1>");
});
app.get("login", function (req, res) {});
app.get("todos", function (req, res) {});
app.post("todos", function (req, res) {});
app.get("todo/:id", function (req, res) {});

app.listen(7777, function () {
  console.log("hi...");
});