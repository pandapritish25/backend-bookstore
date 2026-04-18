import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router";
import { useState } from "react";
import BookModal from "./BookModal";

function BookCard ({book}) {
    const [showModal , setShowModal] = useState(false);
    return (
        <div>
            <div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-2xl">
                <h4 className="my-2 text-gray-500">{book.id}</h4>
                <div className="flex justify-start items-center gap-x-2">
                    <PiBookOpenTextLight className="text-2xl text-red-300"/>
                    <h2 className="my-1">{book.title}</h2>
                </div>
                <div className="flex justify-start items-center gap-x-2">
                    <BiUserCircle className="text-red-300 text-2xl"/>
                    <h2 className="my-1">{book.author}</h2>
                </div>
                <div className="flex justify-start items-center gap-x-2">
                    <CiCalendarDate className="text-red-300 text-2xl"/>
                    <h2 className="my-1">{book.publishYear}</h2>
                </div>
                <div className="flex justify-between items-center gap-x-2  mt-4 p-4">
                    <BiShow
                    onClick={() => setShowModal(true)}
                     className="text-3xl text-green-800 hover:text-black"/>
                    <Link to={`/books/details/${book._id}`}>
                        <BsInfoCircle className="text-2xl text-yellow-600 hover:text-black"/>
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                        <AiOutlineEdit className="text-2xl text-blue-500 hover:text-black cursor-pointer"/>
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                        <MdOutlineDelete className="text-2xl text-red-600 hover:text-black"/>
                    </Link>
                    {
                        showModal && (
                            <BookModal book={book} onclose={() => setShowModal(false)}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default BookCard;