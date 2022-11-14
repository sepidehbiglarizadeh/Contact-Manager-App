import React, { useContext, useState } from "react";

const GroupsContext = React.createContext();
const GroupsContextDispatcher = React.createContext();

const GroupsProvider = ({children}) => {
  const [groups, setGroups] = useState([]);

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
