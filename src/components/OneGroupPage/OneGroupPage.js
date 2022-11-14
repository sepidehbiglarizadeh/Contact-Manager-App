import { useParams } from "react-router-dom";
// import { useGroups, useGroupsActions } from "../Providers/GroupsProvider";
import { useEffect, useState } from "react";
import getAllContactsService from "../../services/getAllContactsService";
import Modal from "./Modal/Modal";

const OneGroupPage = () => {
  const { name } = useParams();
  const [contacts, setContacts] = useState([]);
  const [modalIsShow, setModalIsShow] = useState(false);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const { data } = await getAllContactsService();
        setContacts(data);
      } catch (error) {}
    };
    getContacts();
  }, []);

  return (
    <section className="relative">
      <div
        className={`bg-slate-900 opacity-50 fixed right-0 left-0 top-0 bottom-0 ${
          modalIsShow ? "" : "hidden"
        }`}
        onClick={() => setModalIsShow(false)}
      ></div>
      <Modal
        contacts={contacts}
        modalIsShow={modalIsShow}
        setModalIsShow={setModalIsShow}
      />

      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-lg mb-3 capitalize">{name} group</h2>
        <button
          className="bg-indigo-400 text-white px-2 py-1 rounded-md shadow-md"
          onClick={() => setModalIsShow((prevState) => !prevState)}
        >
          Add New Member
        </button>
      </div>
    </section>
  );
};

export default OneGroupPage;
