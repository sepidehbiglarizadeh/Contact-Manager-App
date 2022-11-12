import { useEffect, useState } from "react";
import getAllContactsService from "../../services/getAllContactsService";
import Contact from "./Contact/Contact";

const ContactsList = () => {
  const [contacts, setContacts] = useState(null);
  const [activeContact, setActiveContact] = useState({id:null,boolean:false});

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
    <section>
      <h2 className="font-bold text-lg mb-3">All Contacts</h2>
      {contacts ?
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
            />
          );
        }) : <p className="text-center font-bold">Loading...</p>}
    </section>
  );
};

export default ContactsList;
