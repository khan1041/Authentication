



const mongoose=require('mongoose')

const uri=('mongodb://localhost:27017/thpa-text')

const conectedDb=async ()=>{

    try {
        await mongoose.connect(uri)
        console.log("conceted done to db")
    } catch (error) {
        console.error("database connected faill")
        process.exit(0)
    }

}





 module.exports=conectedDb
