const mongoose = require('mongoose')

const productSchma = new mongoose.Schema({
    name: { 
        type: String,
    },
    price: {
        type:Number,
    },
    image: {
        data: String, // Store image data as binary
        contentType: String,
    },
//     image:{
// type:String
//     },
    rating:{
        type:Number,
    },
    description:{
        type:String,
    },
    category:{
        type:String,
    }
   
});
const FoodProduct=new mongoose.model('FoodProduct',productSchma)
module.exports=FoodProduct;
// const Student=mongoose.model('student',userschema);
// module.exports=Student;