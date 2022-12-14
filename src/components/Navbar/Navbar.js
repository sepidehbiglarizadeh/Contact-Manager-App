import { FaUsers, FaUserFriends, FaStar,FaPlusCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const items = [
  {id:1, to: "/", icon: <FaUsers />},
  {id:2, to: "/groups", icon: <FaUserFriends />},
  {id:4,to:"new-contact",icon:<FaPlusCircle/>},
  {id:3, to: "/favourites", icon: <FaStar />  },
];

const Navbar = () => {
  return (
    <nav className=" mx-auto p-5">
      <ul className="list-none flex justify-between items-center ">
        {items.map((item) => {
          return (
            <li key={item.id} className="text-slate-400 text-2xl md:text-3xl" >
              <NavLink end to={item.to} className={(navData)=> navData.isActive ? "text-indigo-400" :""}>
                {item.icon}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
