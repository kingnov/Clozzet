import { FaBars } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/images/logo.svg";
export default function Nav() {
  return (
    <div className="container mx-auto flex justify-between">
      <div>
        <ul className="flex justify-between items-center gap-8 py-4">
          <li>
            <img className="w-40" src={logo} />
          </li>
          <li className="hidden sm:block">
            <a href="" >Home</a>
          </li>
          <li className="hidden sm:block">
            <a href="">About Us</a>
          </li>                   
          <li className="hidden sm:block">
            <a href="">Shop</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-8 justify-between items-center py-4">
          <li>
            <AiOutlineShoppingCart size={25} />
          </li>
          <li>
            <a href="">Sign Up</a>
          </li>
          <button className="py-2 px-6 rounded-full border-2 border-black">
            Log in
          </button>
          <li className="block sm:hidden">
            <FaBars />
          </li>
        </ul>
      </div>
    </div>
  );
}
