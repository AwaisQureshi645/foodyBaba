const mongoose=require('mongoose')


const userschema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }
})


const Registation=new mongoose.model('Registation',userschema);

module.exports=Registation;