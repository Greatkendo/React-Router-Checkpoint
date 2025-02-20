import { NavLink } from "react-router";
import CustomInput from "./input/CustomInput";

function NavBar () {
 return (
  <>
  <section className="container mx-auto shadow-xl flex justify-between items-center p-8">
   <h1 className="text-gray-500 font-bold uppercase cursor-pointer"><strong className="text-3xl">🎬</strong>Muvie Cinima</h1>
   <div className="flex items-center gap-5">
    <NavLink to={"/"} className="text-gray-500 hover:text-gray-800 cursor-pointer font-bold text-xl hover:underline">Home</NavLink>
    <NavLink to={"/about-us"} className="text-gray-500 hover:text-gray-800 cursor-pointer font-bold text-xl hover:underline">About</NavLink>
    <NavLink to={"/movies"} className="text-gray-500 hover:text-gray-800 cursor-pointer font-bold text-xl hover:underline">Movies</NavLink>
    <NavLink to={"contact-us"} className="text-gray-500 hover:text-gray-800 cursor-pointer font-bold text-xl hover:underline">Contact</NavLink>
   </div>
   <CustomInput />
  </section>
  </>
 );
}

export default NavBar;