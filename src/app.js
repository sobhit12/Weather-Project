const express =require("express");
const app=express();
const path =require("path");
const hbs=require("hbs");//tabhi jakar partials folder use kar payenge.
const port=process.env.PORT || 800;
//Public static path:
 const static_path=path.join(__dirname,"../public");

app.use(express.static( static_path));
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");
app.set("view engine","hbs");//set the template engine:
app.set("views",template_path);
hbs.registerPartials(partials_path);//hbs ne partials ko registered kar liya hain..
//routing:

app.get("/",(req,res)=>{
    res.render("index")
});

app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
    });
    app.get("*",(req,res)=>{
        res.render("404error",{
            errorMssg:")0ps ! page not Found:"
        })
        });
// app.get("*",(req,res)=>{
//     res.render("404 Error Page OOps")
// });
app.listen(port,(req,res)=>{
console.log(`Listening to port ${port}`)});
// const static_path=path.join(__dirname,"../public");

// app.use(express.static( static_path));