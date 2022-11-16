import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getAllContactsService from "../../services/getAllContactsService";
import Modal from "./Modal/Modal";
import { useGroups, useGroupsActions } from "../Providers/GroupsProvider";

const OneGroupPage = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [contacts, setContacts] = useState([]);
  const [modalIsShow, setModalIsShow] = useState(false);
  const [members, setMembers] = useState([]);

  const groups = useGroups();
  const setGroups = useGroupsActions();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const { data } = await getAllContactsService();
        setContacts(data);
      } catch (error) {}
    };
    getContacts();

    const savedMembers = JSON.parse(localStorage.getItem("members")) || [];
    setMembers(savedMembers);
  }, []);

  useEffect(() => {
    if (members.length > 0) {
      localStorage.setItem("members", JSON.stringify(members));
    }
  }, [members]);

  const addMemberHandler = (contactId) => {
    const index = groups.findIndex((item) => item.id === parseInt(id));
    const group = { ...groups[index] };
    const selectedContact = contacts.find((c) => c.id === contactId);
    group.member.push(selectedContact);
    const updatedGroups = [...groups];
    updatedGroups[index] = group;
    setGroups(updatedGroups);
    setMembers(group.member);
  };

  const removeMember = (memberId) => {
    const index = groups.findIndex((item) => item.id === parseInt(id));
    const group = { ...groups[index] };
    group.member = group.member.filter((m) => m.id !== memberId);
    const updatedGroups = [...groups];
    updatedGroups[index] = group;
    setGroups(updatedGroups);
    const filteredMembers= members.filter((m)=>m.id !== memberId);
    setMembers(filteredMembers);
    localStorage.removeItem("members")
  };

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
        addMemberHandler={addMemberHandler}
        id={id}
      />

      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-lg mb-3 capitalize">
          {state.name} group
        </h2>
        <button
          className="bg-indigo-400 text-white px-2 py-1 rounded-md shadow-md"
          onClick={() => setModalIsShow((prevState) => !prevState)}
        >
          Add New Member
        </button>
      </div>

      <div className="max-h-[65vh] overflow-auto">
        {members
          ? members.map((member) => {
              return (
                <div key={member.id} className="flex items-center mb-3 ">
                  <div className="bg-indigo-100 w-14 h-14 rounded-full flex justify-center items-center mr-2 uppercase font-bold text-slate-600 text-2xl">
                    {member.name.substr(0, 1)}
                  </div>
                  <div className="border-b-2 w-full pb-4 flex justify-between items-center">
                    <div>
                      <div className="font-bold uppercase mb-2">
                        {member.name}{" "}
                      </div>
                      <div>Email : {member.email}</div>
                      <div>Phone Number : {member.phone}</div>
                    </div>
                    <button
                      className="border  border-indigo-400 p-1 rounded-md text-indigo-400 font-bold"
                      onClick={() => removeMember(member.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </section>
  );
};

export default OneGroupPage;
