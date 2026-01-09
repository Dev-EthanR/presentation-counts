import { useState } from "react";
import { NavLink } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";
import menuImg from "../assets/images/menu.svg";
import closeImg from "../assets/images/close.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hover = "hover:text-red-400";
  const isMobile = useIsMobile();

  const navLinks = () => {
    return (
      <div
        className={`bg-secondary text-primary p-4 flex gap-6 text-xl sticky top-0 z-50 ${
          isMobile && "flex-col"
        }`}
      >
        <NavLink to="." end className={hover}>
          Home
        </NavLink>
        <NavLink to="services" className={hover}>
          Services
        </NavLink>
        <NavLink to="gallery" className={hover}>
          Gallery
        </NavLink>
        <NavLink to="about" className={hover}>
          About
        </NavLink>
        <NavLink to="contact" className={hover}>
          Contact
        </NavLink>
      </div>
    );
  };

  return (
    <div className="bg-secondary text-primary p-4 flex gap-6 text-xl sticky top-0 z-50">
      {isMobile ? (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <img
              className="w-10 fillter-white"
              src={isOpen ? closeImg : menuImg}
              alt="menu button"
            />
          </button>
          {isOpen && navLinks()}
        </>
      ) : (
        navLinks()
      )}
    </div>
  );
};

export default NavBar;
