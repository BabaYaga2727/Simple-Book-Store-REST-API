const mongoose = require("mongoose")



const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected!!!")
    }catch(e){
        console.error("ERROR", e)
        process.exit(1) 
    }
}

module.exports = connectDB