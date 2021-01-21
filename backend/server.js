import express from 'express';
import data from './data';

const app=express();

app.get("/api/products",(req,res)=>{
    res.send(data.products);
});
app.listen(5000,() => {consile.log("server started at https://localhost:5000")});
// npm install @bebel/core @babel/node @babel/present-env nodemon --save-dev