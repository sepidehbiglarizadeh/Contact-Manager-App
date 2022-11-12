import { useEffect, useState } from "react";
import deleteContactService from "../../services/deleteContactService";
import getAllContactsService from "../../services/getAllContactsService";
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

  const deleteContactHandler = async (id) => {
    try {
      await deleteContactService(id);
      const filteredContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(filteredContacts);
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
              name={contact.name}
              email={contact.email}
              phone={contact.phone}
              id={contact.id}
              setActiveContact={setActiveContact}
              activeContact={activeContact}
              onDelete={deleteContactHandler}
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
