import { FaPlus, FaTimes } from "react-icons/fa";
import checkInGroup from "../../../utils/checkInGroup";

const Modal = ({
  contacts,
  modalIsShow,
  setModalIsShow,
  addMemberHandler,
  removeMember,
  members,
}) => {
  return (
    <div
      className={`bg-white shadow-sm rounded-md p-4 overscroll-y-auto flex flex-col h-72 absolute right-[10%] left-[10%] top-[-100vh] transition-all ${
        modalIsShow ? "top-[-50px]" : ""
      }`}
    >
      <button
        className="self-end mb-3 text-xl"
        onClick={() => setModalIsShow(false)}
      >
        <FaTimes />
      </button>
      <div className="overflow-y-auto">
        {contacts.length ? (
          contacts.map((contact) => {
            return (
              <div
                key={contact.id}
                className="flex justify-between items-center border-b-2 p-4"
              >
                <span className="font-bold">{contact.name}</span>
                <button
                  className="text-indigo-400 text-lg"
                  onClick={() =>
                    checkInGroup(members, contact)
                      ? removeMember(contact.id)
                      : addMemberHandler(contact.id)
                  }
                >
                  {checkInGroup(members, contact) ? "Remove" : <FaPlus />}
                </button>
              </div>
            );
          })
        ) : (
          <p>There is no contact</p>
        )}
      </div>
    </div>
  );
};

export default Modal;
