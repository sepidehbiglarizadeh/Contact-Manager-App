import { useEffect, useState } from "react";
import deleteContactService from "../../services/deleteContactService";
import getAllContactsService from "../../services/getAllContactsService";
import updateContactService from "../../services/updateContactService";
import Contact from "./Contact/Contact";

const ContactsList = () => {
  const [contacts, setContacts] = useState(null);
  const [activeContact, setActiveContact] = useState({
    id: null,
    boolean: false,
  });

  useEffect(() => {
    const getContacts = async () => {
      try {
        const { data } = await getAllContactsService();
        setContacts(data);
      } catch (error) {}
    };
    getContacts();
  }, []);

  const deleteContactHandler2 = async (id) => {
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
      <h2 className="font-bold text-lg mb-3">All Contacts</h2>
      {contacts ? (
        contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              id={contact.id}
              setActiveContact={setActiveContact}
              activeContact={activeContact}
              onDelete={deleteContactHandler2}
              addFavoutite={addFavoutite}
            />
          );
        })
      ) : (
        <p className="text-center font-bold">Loading...</p>
      )}
    </section>
  );
};

export default ContactsList;
