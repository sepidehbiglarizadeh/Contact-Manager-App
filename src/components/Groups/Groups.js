import { useState } from "react";
import Group from "./Group/Group";
import GroupsForm from "./GroupsForm/GroupsForm";

const Groups = () => {
  const [formIsShow, setFormIsShow] = useState(false);
  const [formValue, setFormValue] = useState("");
  const [groups, setGroups] = useState([]);

  const submitGroupsFormHandler = (e) => {
    e.preventDefault();
    setGroups((prevState) => [
      ...prevState,
      { name: formValue, member: [], id: new Date().getTime() },
    ]);
    setFormValue("");
  };

  return (
    <section>
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-lg">All Groups</h2>
        <button
          className="bg-indigo-400 text-white px-2 py-1 rounded-md shadow-md"
          onClick={() => setFormIsShow((prevState) => !prevState)}
        >
          {formIsShow ? "Cancel" : "Add New Group"}
        </button>
      </div>
      <GroupsForm
        formValue={formValue}
        setFormValue={setFormValue}
        formIsShow={formIsShow}
        submitGroupsFormHandler={submitGroupsFormHandler}
      />
      {groups.length
        ? groups.map((group) => {
            return <Group key={group.id} group={group} />;
          })
        : ""}
    </section>
  );
};

export default Groups;
