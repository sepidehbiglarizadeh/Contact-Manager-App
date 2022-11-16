import React, { useContext, useEffect, useState } from "react";

const GroupsContext = React.createContext();
const GroupsContextDispatcher = React.createContext();

const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    if (groups.length > 0) {
      localStorage.setItem("groups", JSON.stringify(groups));
    }
  }, [groups]);

  useEffect(() => {
    const savedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setGroups(savedGroups);
  }, []);

  return (
    <GroupsContext.Provider value={groups}>
      <GroupsContextDispatcher.Provider value={setGroups}>
        {children}
      </GroupsContextDispatcher.Provider>
    </GroupsContext.Provider>
  );
};

export default GroupsProvider;

export const useGroups = () => useContext(GroupsContext);
export const useGroupsActions = () => useContext(GroupsContextDispatcher);
