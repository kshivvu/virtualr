import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navigation = () => {
  const [ toggleMobile, setToggleMobile ] = useState(false);
  const toggle = () => {
    setToggleMobile(!toggleMobile);
  };
  return (
    <nav className="sticky top-0 z-50  backdrop-blur-lg  py-3 border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="auto" className="w-10 h-10 mr-2" />
            <span className="tracking-tight text-xl">VirtualR</span>
          </div>
          <ul className="hidden lg:flex flex-row ml-14  space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label} </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex space-x-12">
            <a href="#" className="border-1 border-white rounded-md py-2 px-4 hover:bg-gradient-to-r from-orange-500 to-orange-800 hover:scale-125 ease-in-out duration-1000 delay-150">
              Sign In
            </a>
            <a
              href="#"
              className="rounded-md bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex">
            <button onClick={toggle}>{toggleMobile ? <X /> : <Menu />}</button>
          </div>
        </div>
      </div>
      {toggleMobile && <div className="flex fixed right-0  bg-neutral-900 z-20 flex-col w-full justify-center items-center p-12">
        <ul className="flex flex-col space-y-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label} </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-center items-center space-x-4">
            <a href="#" className="border-1 border-white rounded-md py-2 px-4 hover:bg-gradient-to-r from-orange-500 to-orange-800 hover:scale-125 ease-in-out duration-500 delay-150">
              Sign In
            </a>
            <a
              href="#"
              className="rounded-md bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4"
            >
              Create an account
            </a>
          </div>
        </div>}
    </nav>
  );
};

export default Navigation;





// runtime polymorphism