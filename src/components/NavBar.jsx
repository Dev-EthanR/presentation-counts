import { NavLink } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";
import menuImg from "../assets/images/icons/menu.svg";
import closeImg from "../assets/images/icons/close.svg";
import Button from "./Button";

const NavBar = ({ isOpen, setIsOpen }) => {
  const isMobile = useIsMobile();
  if (!isMobile) setIsOpen(false);
  const menuStateImage = isOpen ? closeImg : menuImg;
  const navLinks = () => {
    return (
      <nav className="text-white col-span-full" id="menu">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:text-xl text-2xl">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="services">Services</NavLink>
          <NavLink to="gallery">Gallery</NavLink>
          <NavLink to="contact">Contact</NavLink>
          <NavLink to="quote">
            <Button color="text-secondary bg-primary">
              Request a Free Quote
            </Button>
          </NavLink>
        </div>
      </nav>
    );
  };

  return (
    <>
      {isMobile ? (
        <>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="justify-self-end pr-5"
            aria-expanded={isOpen}
            aria-controls="menu"
          >
            <img className="fillter-white w-10" src={menuStateImage} alt="" />
          </button>
          {isOpen && navLinks()}
        </>
      ) : (
        navLinks()
      )}
    </>
  );
};

export default NavBar;
