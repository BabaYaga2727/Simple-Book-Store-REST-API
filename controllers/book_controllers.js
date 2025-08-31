const Book = require("../models/book")

const getAllBooks = async (req, res)=>{
    try{
        const allBooks = await Book.find({})
        if (allBooks.length > 0){
        res.status(200).json({
            message: "Books founded!!!",
            data: allBooks
        })
        }else{
            res.status(404).json({
            message: "Books not found"
        })
        }

    }catch(e){
        res.status(500).json({
        success: false,
        message: "Something Went Wrong!!!"
    })

}
}

const getOneBook = async (req, res)=>{
    try{
        const currentBookId = req.params.id
        const bookById = await Book.findById(currentBookId)

        if(!bookById){
            return res.status(404).json({
            message: "Book is not found"
        })}
        return res.status(200).json({
            bookById
        })
    }catch(e){
        res.status(500).json({
        success: false,
        message: "Something Went Wrong!!!"
    })
}
}
const addBook = async (req, res)=>{
    try{
        const newBookForm = req.body
        const newlyCreatedBook = await Book.create(newBookForm)

        if(newlyCreatedBook){
            res.status(201).json({
                success: true,
                message: "The Book was created successfully!!!",
                data: newlyCreatedBook
            })
        }
    }catch(e){
        res.status(500).json({
        success: false,
        message: "Something Went Wrong!!!"
    })

    }
}

const updateBook = async (req, res)=>{
    try{
        const currentBookId = req.params.id
        const bookInLibrary = await Book.findById(currentBookId)
        if (!bookInLibrary){
            return res.status(404).json({
                success: false,
                message: "Book not found"
            })
        }

        const updatedBook = await Book.findByIdAndUpdate(
            currentBookId, 
        {$set: req.body},
        {new:true, runValidators: true}
        
    )
        return res.status(200).json({
        success: true,
        data: updatedBook
    })
    }catch(e){
        res.status(500).json({
            success: false,
            message: "Something Went Wrong!!! "
        })
    }
}

const deleteBook = async (req, res)=>{
    try{
        const currentBookId = req.params.id
        const bookById = await Book.findByIdAndDelete(currentBookId)

        if(!bookById){
            return res.status(404).json({
            message: "Book is not found"
        })}
        res.status(200).json({
            bookById
        })
    }catch(e){
        res.status(500).json({
        success: false,
        message: "Something Went Wrong!!!"
    })
}
}

module.exports = {
    getAllBooks,
    getOneBook,
    addBook,
    updateBook,
    deleteBook
}