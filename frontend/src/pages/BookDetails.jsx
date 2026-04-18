import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Spinner from "../components/spinner";
import Backbutton from "../components/Backbutton";



function BookDetails() {
    const { _id } = useParams();
    const [loading , setisLoading] = useState(false);
    const [book,setBook] = useState([]);
    
    useEffect(() => {
        setisLoading(true);
        async function fetchBooks() {
            try {
                const response = await axios.get(`http://localhost:8000/books/${_id}`);
                setBook(response.data);
            } catch(error) {
                console.log(error.mesage);
                throw new error;
            } finally {
                setisLoading(false);
            }
        }
        fetchBooks();
    } , [_id]);

    return (
        <div className="p-4">
            <Backbutton></Backbutton>
            <h1 className="text-3xl my-4">Book details</h1>
            {loading ? (<Spinner/>): (
            <div className="flex flex-col border-2 border-sky-400 rounded-2xl p-4 mt-2 w-fit mx-auto">
                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">Id</span>
                    <span>{book._id}</span>
                </div>
                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">Title</span>
                    <span>{book.title}</span>
                </div>

                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">Author</span>
                    <span>{book.author}</span>
                </div>

                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">publishYear</span>
                    <span>{book.publishYear}</span>
                </div>
                
                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">CreateTime</span>
                    <span>{new Date(book.createdAt).toString()}</span>
                </div>

                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">UpdatedTime</span>
                    <span>{new Date(book.updatedAt).toString()}</span>
                </div>
            
            </div>
            )}
        </div>
    )
}
export default BookDetails;