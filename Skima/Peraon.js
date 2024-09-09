


const maongse=require('mongoose')
const ens=require('dotenv').config()

const bceypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const { default: mongoose } = require('mongoose')

//skima

const personScema= new maongse.Schema({
name:{         

type:String,
required:true,
}
   ,
  
 password:{
   type:String,
   required:true
  
  },

 email:{
 type:String,
 uniqe:true,
 required:true
},

 isAdmin:{
  type:Boolean,
   default:false

  },


})


//password secure part

personScema.pre('save',async function(next){

const kist=this
console.log('pre method',this)

if(!kist.isModified("password")){
  next()
}
try {
  const conte=await bceypt.genSalt(10)

  const reaite=await bceypt.hash(kist.password,conte)
  kist.password=reaite

} catch (error) {
  next()
}


})



//jwt token part//

personScema.methods.generateToken=async function(){
    try {
      return jwt.sign({
        userID:this._id.toString(),
        email:this.email,
        password:this.password,
        isAdmin:this.isAdmin
      },
    process.env.JWT_SECRECT_KEY
    )
    } catch (error) {
      console.log(error)
    }
    
    }


const Peraon=maongse.model('text-reg',personScema);
module.exports=Peraon





