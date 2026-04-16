// first thing after having express is that you would be needing to import express thus you would be 
// needing to import the express file
import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";
import { Book } from "./models/bookModel.js";

// now you would be needing to create an app instance and you need to call express
const app = express();

app.use(express.json()); 

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
})
// this thing here is basically known ads a query parameter 
app.get("/books/:id" , async (req , res) => {
    const {id} = req.params;
    try {
        const book = await Book.findById(id);
        res.status(200).json(book);
    } catch(error ) {
        res.status(500).json({message: "No book in this id"});
    }
})
connectDB(app)
