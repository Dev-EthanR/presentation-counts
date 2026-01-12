import logo from "../assets/images/logo.png";
import bg from "../assets/images/bg.jpg";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      style={{ backgroundImage: `url(${bg})` }}
      className={`bg-size-[83px]  min-h-40 text-2xl pt-4 flex items-center`}
    >
      <div className="flex max-w-375 w-full justify-between items-center mx-auto">
        <Link to="/">
          <img
            className="select-none px-4 md:px-0"
            src={logo}
            alt="Presentation Counts Logo"
          />
        </Link>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
