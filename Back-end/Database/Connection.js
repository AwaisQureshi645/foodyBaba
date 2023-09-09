const mongoose=require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/FoodyBaba',{
    useUnifiedTopology: true,
    
}).then(()=>{
console.log("connect to mongodb")
}).catch((error)=>{
console.log("error is occur ",error)
})