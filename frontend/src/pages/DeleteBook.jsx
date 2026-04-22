import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

function DeleteBook() {
    const navigate = useNavigate();
    const [bookDetails , setBookDetails] = useState({});
    const [loading , setIsloading] = useState(false);
    const {id} = useParams(); 

    async function handleDelete() {
        try {
            await axios.delete(`http://localhost:8000/books/${id}`);
        } catch(Error) {
            console.log(Error);
        } finally{
            navigate("/");
        }
    }
    return (
        <div>
            <h1>Are you sure you want to delete the book</h1>
            <button className="p-2 bg-red-300 m-8 cursor-pointer"
            onClick={handleDelete}>Delete</button>
        </div>
    )
}
export default DeleteBook;