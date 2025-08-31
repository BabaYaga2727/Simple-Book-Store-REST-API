const express = require("express")

const router = express.Router()
const {getAllBooks,
    getOneBook,
    addBook,
    updateBook,
    deleteBook} = require("../controllers/book_controllers")

//all the routes which are related to the books only
router.get("/get", getAllBooks)
router.get("/get/:id", getOneBook)
router.post("/add", addBook)
router.put("/update/:id", updateBook)
router.delete("/delete/:id", deleteBook)

module.exports = router