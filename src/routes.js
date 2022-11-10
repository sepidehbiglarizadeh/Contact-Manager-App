import ContactsList from "./components/ContactsList/ContactsList";
import Favourites from "./components/Favourites/Favourites";
import Groups from "./components/Groups/Groups";

const routes=[
    {path:"/" ,element:<ContactsList/>},
    {path:"/groups" ,element:<Groups/>},
    {path:"/favourites" ,element:<Favourites/>},
]

export default routes;