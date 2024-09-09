

const  express=require('express')
const db=require('./Datalocation/db')
const app=express()

const authmidelw=require('./mideleware/Auth-midelware')
const   adminware=require('./mideleware/Auth-mjsx')
const cors=require('cors')
const port=5000
app.use(express.json())
// const coursOption={
// origin:"http://localhost:3000        ",
// method:"GET,POST,PUT,DELETE,PATCH,HEAD   ",
// credentials:true,
// }

app.set('view engine','ejs')
    app.set('view engine','ejs')
    app.set('views')

  app.use(express.urlencoded({extended:false}))
const path=require('path')
const { render, name } = require('ejs')
const { method } = require('lodash')
app.use(express.urlencoded({extended:false}))

const templete=path.join(__dirname,'views')
const router=require('./router/auth-router')


app.use(cors())
app.use("/app/auth",router)


db().then(()=>{

  app.listen(port,()=>{

   console.log(`surver is running at port:${port}`)    

  })

})
























// const express=require("express")
// const router=require("./router/auth-router")
// const conectedDb=require("./skima/db")
// const app=express()
// app.use(express.json())
// app.use("app/auth",router)

// app.get("/",(req,res)=>{

//   res.send("Hello-world")
  
// })

// conectedDb().then(()=>{



// app.listen(5000,()=>{
//   console.log("ok")
// })

// })



