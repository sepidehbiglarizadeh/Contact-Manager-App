import { useEffect, useState } from "react";
import deleteContactService from "../../services/deleteContactService";
import getAllContactsService from "../../services/getAllContactsService";
import updateContactService from "../../services/updateContactService";
import Contact from "./Contact/Contact";

const ContactsList = () => {
  const [contacts, setContacts] = useState(null);
  const [allContacts, setAllContacts] = useState(null);
  const [activeContact, setActiveContact] = useState({
    id: null,
    boolean: false,
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getContacts = async () => {
      try {
        const { data } = await getAllContactsService();
        setContacts(data);
        setAllContacts(data);
      } catch (error) {}
    };
    getContacts();
  }, []);

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    const filteredContacts = allContacts.filter((c) => {
      return Object.values(c)
        .join(" ")
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setContacts(filteredContacts);
  };

  const deleteContactHandler = async (id) => {
    try {
      await deleteContactService(id);
      const filteredContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(filteredContacts);
    } catch (error) {}
  };

  const addFavoutite = async (id) => {
    const index = contacts.findIndex((item) => item.id === id);
    const contact = { ...contacts[index] };
    contact.favourite = !contact.favourite;
    const updatedContacts = [...contacts];
    updatedContacts[index] = contact;
    setContacts(updatedContacts);
    try {
      await updateContactService(id, contact);
    } catch (error) {}
  };

  return (
    <section>
      <input
        type="search"
        placeholder="Search ..."
        className="w-full rounded-md p-2 shadow-sm outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
        value={searchTerm}
        onChange={searchHandler}
      />
      <h2 className="font-bold text-lg mb-3">All Contacts</h2>
      <div className="max-h-[65vh] overflow-auto">
        {contacts ? (
          contacts.map((contact) => {
            return (
              <Contact
                key={contact.id}
                contact={contact}
                id={contact.id}
                setActiveContact={setActiveContact}
                activeContact={activeContact}
                onDelete={deleteContactHandler}
                addFavoutite={addFavoutite}
              />
            );
          })
        ) : (
          <p className="text-center font-bold">Loading...</p>
        )}
      </div>
    </section>
  );
};

export default ContactsList;
