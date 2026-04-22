import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { Link } from "react-router";
import BookCard from "../components/BookCard";
import Spinner from "../components/spinner";


function Homepage() {
    const [books , setBooks] = useState([]);
    const [loading , setisLoading] = useState(false);
    useEffect(() => {
    async function fetchBooks() {
        // this function will fetch books from backend
        setisLoading(true)
        try {
            const response = await axios.get("http://localhost:8000/books");
            // thus response.data would be giving me the data here and thus we can say that the response.data
            // has given me the data here.
            setBooks(response.data.books);
        } catch (error) {
            console.log(error.message);
            throw new Error(error);
        } finally {
            setisLoading(false);
        }
    }
    // first I will basically write the backend function which will fetch books
        fetchBooks();
    } , []);
    
    return(
        <div className="p-4">
            <div className="flex justify-between items-center">
                {/* basic question would be why after my-8 also the outline box is also going , the ans is these
                are in flex part so these all are in flex box and for that reason these all are present inside flexbox part so if object A also moves , object B will also move */}
                <h1 className="text-3xl my-8">Books List</h1>
                <Link to="/books/create">
                    <MdOutlineAddBox className="text-sky-800 text-4xl"/>
                </Link>
            </div>
            <div>
                {loading ? (<Spinner/>) : (
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4">
                    {books.map((book) => (
                        <BookCard key={book._id} book={book} />
                    ))}
                </div>
                )}
            </div>
        </div>
    )
}
export default Homepage;