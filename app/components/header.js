import Navbar from "./navbar";
import { GiPolarStar } from "react-icons/gi";
function Header() {
    return ( 
        <div className="flex justify-between items-center text-white">
            <h1 className="font-serif font-bold text-2xl flex items-center"><div className="text-yellow-500"><GiPolarStar /></div>Batkhuyag Anar</h1>
            <Navbar/>
        </div>
     );
}

export default Header;