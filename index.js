var express=require('express');
var path=require('path')
const catrouter=require('./routes/categoryroutes');

const app=express()
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))

app.use('/category',catrouter);
app.get("/",(req,res)=>{
    res.render("home")
});
app.listen(3030,"localhost",()=>{
    console.log("running port 3030")
})