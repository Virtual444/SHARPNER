// const http = require('http');
// const  express = require('express');
// const app = express();
// app.use((req, res, next) => {
//     console.log('In the Middleware');
//     next();
// });
// app.use((req, res, next) =>{
//     console.log('In the another Middleware');
//     res.send('<h1>hello from express</h1>');
    
// });

// // const server = http.createServer(app);
// // server.listen(3000);
// app.listen(3000);


const http = require('http');
const express=require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
 

app.use('/add-product', (req, res, next) => {
    console.log('In another Middleware');
    res.send('<form action ="/product" method= "POST"><input type = "text" name = "title"><input type="text" name="size" name="Product Size"><br><button type ="submit"> Add product</button></form>')
});
app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
   
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express</h1>');
    
   
});

app.listen(3000);