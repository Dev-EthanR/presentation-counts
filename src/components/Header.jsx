import logo from "../assets/images/logo.png";
import bg from "../assets/images/bg.jpg";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useState } from "react";
import useLockBodyScroll from "../hooks/usePreventScroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  useLockBodyScroll(isOpen);
  return (
    <header
      style={{ backgroundImage: `url(${bg})` }}
      className={`bg-size-[83px]  flex ${
        isOpen && "min-h-dvh items-start pt-17"
      } min-h-40 text-2xl pt-4 md:px-4`}
    >
      <div
        className={`grid grid-cols-3 gap-y-7 lg:flex lg:items-center lg:justify-between lg:max-w-375 lg:w-full lg:mx-auto`}
      >
        <Link to="/" className="col-span-2 self-center pr-12">
          <img
            className="select-none px-4 lgmd:px-0 w-140"
            src={logo}
            alt="Presentation Counts Logo"
          />
        </Link>
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
