import { useState } from "react";
import { useNavigate } from "react-router-dom";
import addNewContactService from "../../services/addNewContactService";

const AddContact = () => {
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitFormHandler = async (e) => {
    if (!contact.name || !contact.email || !contact.phone) {
      alert("All Fields Are Mandatory");
      return;
    }
    e.preventDefault();
    try {
      await addNewContactService(contact);
      setContact({ name: "", email: "", phone: "" });
      navigate("/")
    } catch (error) {}
  };

  return (
    <form
      className="w-[80%] md:w-[70%] mx-auto mt-5"
      onSubmit={submitFormHandler}
    >
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">
          Name :
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={contact.name}
          className="rounded-md p-2 w-full outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
          onChange={changeHandler}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">
          Email :
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={contact.email}
          className="rounded-md p-2 w-full outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
          onChange={changeHandler}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-1">
          Phone Number :
        </label>
        <input
          type="number"
          id="phone"
          name="phone"
          value={contact.phone}
          className="rounded-md p-2 w-full outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
          onChange={changeHandler}
        />
      </div>
      <button className="w-full bg-indigo-400 text-white font-bold p-2 rounded-md mt-4">
        Add New Contact
      </button>
    </form>
  );
};

export default AddContact;
