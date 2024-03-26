import Header from "./header";
import Word from "./word";
import Image from "next/image";

function Mainhome() {
    return ( 
        <div className="bg-lime-900 w-full h-screen">
            <Header/>
            <Word/>
        </div>
     );
}

export default Mainhome;