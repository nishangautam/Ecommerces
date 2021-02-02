import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';

dotenv.config();
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error=> console.log(error.reason));

const app=express();
app.use("/api/users", userRoute);

app.get("/api/products/:id",(req,res)=>{
   // const productId = req.params.id;
    const product = data.products.find(x =>x.id === req.params.id);
    if (product)
    res.send(product);
    else
    res.status(404).send({msg:"Product Not FOund."})
});
app.get("/",(req,res)=>{
    res.send('Hello World');
    res.send(data.products);
});
// app.listen(5000,() => {console.log("server started at https://localhost:5000")});
// install babel 
app.get('/api/products', function (req, res) {
   
    res.send(data.products);
})

var server = app.listen(5000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://127.0.0.1", host, port)
})