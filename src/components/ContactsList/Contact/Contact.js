import {
  FaChevronDown,
  FaEdit,
  FaRegTrashAlt,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = ({
  name,
  email,
  phone,
  id,
  setActiveContact,
  activeContact,
  onDelete,
  contact,
  addFavoutite,
}) => {
  return (
    <div className="flex items-center mb-3 ">
      <div className="bg-indigo-100 w-14 h-14 rounded-full flex justify-center items-center mr-2 uppercase font-bold text-slate-600 text-2xl">
        {name.substr(0, 1)}
      </div>
      <div className="border-b-2 w-full pb-4 flex justify-between items-center">
        <div>
          <div className="font-bold uppercase mb-2">{name} </div>
          <div>Email : {email}</div>
          <div>Phone Number : {phone}</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            className="mb-3 text-indigo-400 text-xl"
            onClick={()=>addFavoutite(id)}
          >
            {contact.favourite ? <FaStar /> : <FaRegStar />}
          </button>
          <button
            className="bg-slate-100 p-2 rounded-md text-slate-600 mb-2 shadow-md"
            onClick={() =>
              setActiveContact({ id, boolean: !activeContact.boolean })
            }
          >
            <FaChevronDown />
          </button>
          <div
            className={`flex bg-white rounded-md shadow-md ${
              activeContact.id === id && activeContact.boolean
                ? "h-auto"
                : "h-0 hidden"
            }`}
          >
            <Link to="/new-contact" state={contact}>
              <button className="p-2 text-indigo-400">
                <FaEdit />
              </button>
            </Link>
            <button className="p-2 text-red-800" onClick={() => onDelete(id)}>
              <FaRegTrashAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
