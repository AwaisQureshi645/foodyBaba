const express=require('express')
const app=express()
const PORT=process.env.PORT || 3000;
const mongo=require('./Database/Connection') //connection mongodb
const FoodProduct=require('./Model/ProductModel') //model 
const router=require('./Router/Router') ;
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middle
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(bodyParser.json()); // Parse JSON bodies
app.use(express.json());

app.use(cors());

//all router
app.get('/',router);
app.get('/shop',router)
app.get('/shop/:id',router)
// app.get('/signup',router)
app.post('/product',router)
app.post('/signup',router)
app.post('/login',router)
app.post('/checkout',router)
// app.get('/show/image/data',router)
app.use("/upload",express.static("./upload"));
//listen
app.listen(PORT,()=>{
    console.log(`Server is listen at the port no ${PORT}`)
})