import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import Backbutton from "../components/Backbutton";
import axios from "axios";
import Spinner from "../components/spinner";


function EditBook() {
    const navigate = useNavigate();
    const [bookDetails , setBookDetails] = useState({});
    const [loading , setIsloading] = useState(false);
    const {id} = useParams(); 

    function handleInputChange(e) {
        const {name , value} = e.target;
        setBookDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }))
    }
    async function handleEditBook() {
        setIsloading(false);
        try {
            await axios.put(`http://localhost:8000/books/${id}` , bookDetails)
        } catch(error) {
            console.log(error);
        } finally {
            setIsloading(false);
            navigate("/");
        }
    }
    return (
        <div className="text-3xl my-4">
            <Backbutton/>
            <h1 className="text-3xl my-4">Edit Book</h1>
            {loading ? <Spinner/>: ""}
            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto" >
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-700">Title</label>
                    <input 
                    id="title"
                    type="text"
                    name="title"
                    value={bookDetails.title}
                    onChange={(e) => handleInputChange(e)}
                    className="border-2 border-gray-500 px-4 py-2 w-full"/>
                </div>

                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-700">Author</label>
                    <input 
                    id="author"
                    type="text"
                    name="author"
                    value={bookDetails.author}
                    onChange={(e) => handleInputChange(e)}
                    className="border-2 border-gray-500 px-4 py-2 w-full"/>
                </div>

                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-700">PublishYear</label>
                    <input 
                    id="publishYear"
                    type="number"
                    name="publishYear"
                    value={bookDetails.publishYear}
                    onChange={(e) => handleInputChange(e)}
                    className="border-2 border-gray-500 px-4 py-2 w-full"/>
                </div>
                <button className="p-2 bg-sky-300 m-8 cursor-pointer"
                onClick={handleEditBook}>Save</button>
            </div>
        </div>
    )
}
export default EditBook;