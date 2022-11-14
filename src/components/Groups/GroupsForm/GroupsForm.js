import {  FaPlusSquare } from "react-icons/fa";


const GroupsForm = ({formIsShow,formValue,submitGroupsFormHandler,setFormValue}) => {
    return ( 
        <form
        className={`flex justify-center items-center ${
          formIsShow ? "" : "hidden"
        }`}
        onSubmit={submitGroupsFormHandler}
      >
        <input
          type="text"
          placeholder="Enter Your Group Name..."
          className="p-2 rounded-md w-[50%] outline-none shadow-sm focus:ring-2 focus:ring-indigo-400"
          onChange={(e) => setFormValue(e.target.value)}
          value={formValue}
        />
        <button className="ml-1 text-indigo-400 text-3xl">
          <FaPlusSquare />
        </button>
      </form>
     );
}
 
export default GroupsForm;