
const bceypt=require('bcryptjs')

const User=require('../Skima/Peraon')

const regestation= async(req,res)=>{

  try {
  const {email,name,password}=req.body

  //data find to skima
  const find=await User.findOne({email})

    if(find){
      return res.status(200).json({msg:"already  this is exits "})
    }
    //crate user//

const Crateuser=await User.create({
  name,email,password
})
res.status(201).json({msg:Crateuser})

  } catch (error) {
    console.log(error)
    
  }

}



//loging part//

  const loginpart=async(req,res)=>{

    try {
  const {email,password}=req.body
  
  const loginpart=await User.findOne({email})
  
  if(!loginpart){
  
  return res.status(400).json({msg:"invalid email"})
  }
  
  console.log(loginpart)
  
  const passwoardcheak=await bceypt.compare(password,loginpart.password)
  
  if(passwoardcheak){
    return res.status(200).json({msg:"done login",
  
        token:await loginpart.generateToken(),userid:loginpart._id.toString()
    })
  }
  else{
    return res.status(400).json({msg:"email or passwoard faill"})
  }
  
    } catch (error) {
        console.log(error)
        res.status(400).send({msg:"page not found"})
    }
    
    }

module.exports={regestation,loginpart}



