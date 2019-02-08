const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const path = require('path');
const db = require("./db");

// const Joi = require('joi');

const collection = "products";

app.get('/home.component.html', (req, res)=> {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/getProducts', (req, res)=> {
    db.getDB().collection(collection).find({}).toArray((err, documents)=> {
    if(err)
    console.log("error");
    else {
        // console.log("check log");
        console.log("retrieving products info.....");
        console.log(documents);
        res.json(documents);
    }
    });
});

db.connect((err)=>{
    if(err){
        console.log(err);
        console.log("Unable to connect");
        process.exit(1);
    }
    else{
        app.listen(4000,()=>{
            console.log("Connected to mongoDB shopping_cart data!!");
        // process.exit(1);

        });
    }
});