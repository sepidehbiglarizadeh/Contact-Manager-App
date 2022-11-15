import { useEffect, useState } from "react";
import deleteContactService from "../../services/deleteContactService";
import getAllContactsService from "../../services/getAllContactsService";
import updateContactService from "../../services/updateContactService";
import Contact from "../ContactsList/Contact/Contact";

const Favourites = () => {
  const [contacts, setContacts] = useState([]);
  const [activeContact, setActiveContact] = useState({
    id: null,
    boolean: false,
  });

  useEffect(() => {
    const getContacts = async () => {
      try {
        const { data } = await getAllContactsService();
        setContacts(data.filter((d) => d.favourite));
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
    setContacts(updatedContacts.filter((c) => c.favourite));
    try {
      await updateContactService(id, contact);
    } catch (error) {}
  };

  return (
    <section>
      <h2 className="font-bold text-lg mb-3">Favourite Contacts</h2>
      <div className="max-h-[65vh] overflow-auto">
        {contacts.length > 0 ? (
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
          <p className="text-center font-bold">There is no favourite contact</p>
        )}
      </div>
    </section>
  );
};

export default Favourites;
