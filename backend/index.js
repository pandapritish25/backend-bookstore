// first thing after having express is that you would be needing to import express thus you would be 
// needing to import the express file
import express from "express";
import "dotenv/config";
import { Book } from "./models/bookModel.js";
import connectDB from "./config/db.js";
import cors from "cors";

// now you would be needing to create an app instance and you need to call express
const app = express();
app.use(express.json()); 
// here always you need to remember that cors is a function not a variable
// for this reason infinite loading was there and rendering was not able to happen , we would be needing to have cors and that to we would be needing
// to use cors as a function
app.use(cors());

// in order for getting anything from server app.get
app.get("/" , (req , res) => {
    res.status(200).send("<h1>Hello world</h1>")
})
// in case of posting anything to the server app.post

app.post("/books" , async (req , res) => {
    try {
        const {title , author , publishYear} = req.body;
        // as in postman we need output in json so we would be sending output in json
        if (!title || !author || !publishYear) {
            return res.status(400).json({message: "All fields are needed"});
        }
        const newBook = await Book.create({title , author , publishYear});
        // thus whatever you are having , you are sending them to the user and then so the book is been sent to the user
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({message: "Error creating Book"});
    }
});

app.get("/books", async (req , res) => {
    try {
        const books = await Book.find();
        res.status(200).json({
            count: books.length,
            books,
        });
    } catch (error) {
        res.status(500).json({message: "Error fetching books"});
        console.log(error.message);
    }
});
// this thing here is basically known ads a query parameter 
app.get("/books/:id" , async (req , res) => {
    const {id} = req.params;
    try {
        const book = await Book.findById(id);
        res.status(200).json(book);
    } catch(error ) {
        res.status(500).json({message: "No book in this id"});
    }
});
// this is basically to update a book means you would be needing to update the book inside and thus 
// this is known as the put method in which we woudl be updating the book
app.put("/books/:id" , async (req , res) => {
    const {id} = req.params;
    try {
        const {title , author , publishYear} = req.body;
        const updatedBook = await Book.findByIdAndUpdate(id , {title , author , publishYear});
        res.status(201).json(updatedBook);
    } catch(error) {
        res.status(500).json({message: "Unable to update the data" , error});
    }
});

// this is the function which we would be using to delete the folders.
app.delete("/books/:id" , async (req , res) => {
    const {id} = req.params;
    try {
        const deleteBook = await Book.findByIdAndDelete(id);
        return res.status(200).json({message: "Book has been deleted successfully"});
    } catch (error) {
        res.status(500).json({message: "Failed to delete data" , error});
    }
});
connectDB(app)
