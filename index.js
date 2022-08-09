const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/",(req,res) =>{
     
    res.render("index");

});

app.get("/questions",(req,res) => {
    res.render("questions");
});
    
app.post("/saveanswer", (req,res) =>{
    var title = req.body.title;
    var description = req.body.description;
    res.send("Formulario recebido! title " + title + " " + " description " + description);
});




app.listen(8080,function(erro){
    if(erro){
        console.log("ocorreu um erro!");       
    }else{
        console.log("servidor iniciado com sucesso!");
    }
})