const AddContact = () => {
    return ( 
        <form className="w-[80%] md:w-[70%] mx-auto mt-5">
            <div className="mb-4">
                <label htmlFor="name" className="block mb-1">Name :</label>
                <input type="text" id="name" className="rounded-md p-2 w-full outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-1">Email :</label>
                <input type="email" id="email" className="rounded-md p-2 w-full outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm" />
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block mb-1">Phone Number :</label>
                <input type="number" id="phone" className="rounded-md p-2 w-full outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm" />
            </div>
            <button className="w-full bg-indigo-400 text-white font-bold p-2 rounded-md mt-4">Add New Contact</button>
        </form>
     );
}
 
export default AddContact;