import express from 'express';
import data from './data';

const app=express();

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