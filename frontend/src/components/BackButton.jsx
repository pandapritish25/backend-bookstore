import { Link } from "react-router";
import { BsArrowLeft } from "react-icons/bs";

function Backbutton() {
    return (
        <div className="flex">
         <Link
         to={"/"}>
             <BsArrowLeft className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit text-2xl"></BsArrowLeft>
         </Link>
        </div>
     );
}
export default Backbutton;