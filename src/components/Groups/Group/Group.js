import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";


const Group = ({group}) => {
  return (
      <Link to={`/groups/${group.id}`} state={group}>
        <div className="flex justify-between items-center border-b-2 py-4">
          <div className="flex flex-col">
            <span className="font-bold capitalize text-lg">{group.name}</span>
            <span className="text-sm">{group.member.length} people</span>
          </div>
          <button className="text-slate-600">
            <FaChevronRight />
          </button>
        </div>
      </Link>
  );
};

export default Group;
