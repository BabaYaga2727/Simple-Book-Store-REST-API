const express = require("express")
require("dotenv").config()
const connectDB = require("./database/db")
const bookRoutes = require("./routes/book_routes")

const app = express()
const PORT = process.env.PORT || 3000
connectDB()

//middlewares
app.use(express.json())

//routes here
app.use("/api/books", bookRoutes)


app.get("/", (req, res)=>{
    res.send("Done")
})

app.listen(PORT, ()=>{
    console.log(`Server running on port 3000`)
})