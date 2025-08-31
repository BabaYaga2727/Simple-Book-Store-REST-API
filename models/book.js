const mongoose = require("mongoose")
const BookSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: [true, "Book's title is required"],
        maxLength: 50
    },

    author: {
        type: String, 
        required: [true, "Book's author is required"],
        maxLength: 50
    },

    dateOfPublication: {
        type: Date, 
        required: [true, "Book's date of publication is required"],
        maxLength: 50
    },

    page: {
        type: Number
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Book", BookSchema)