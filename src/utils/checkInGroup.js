const checkInGroup = (members, contact) => {
  return members.find((m) => m.id === contact.id);
};

export default checkInGroup;
