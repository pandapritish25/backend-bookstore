import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishYear: {
        type: Number,
        required: true
    },
} , {timestamps: true},);

// so basically what happens the schema we have created is the book schema and using the book schema , we would be creating
// models means wherever I import , this would be imported at once and thats called as Book model
export const Book = mongoose.model("Book" , bookSchema); 