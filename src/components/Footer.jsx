import { Link } from "react-router-dom";
import bg from "../assets/images/bg.jpg";
import useIsMobile from "../hooks/useIsMobile";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const isMobile = useIsMobile();
  return (
    <footer
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-size-[83px] h-88 lg:h-40 w-full text-2xl flex flex-col py-2 lg:py-8 text-white"
    >
      <h2 className="text-center italic text-xl lg:text-3xl w-full whitespace-nowrap">
        Experienced.{" "}
        <span className="text-primary">Professional. Trusted.</span>
      </h2>
      {isMobile && (
        <ul className="flex flex-col text-base pl-12 pt-4">
          <li className="hover:brightness-85 bottomBorder">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:brightness-85 bottomBorder">
            <Link to="about">About</Link>
          </li>
          <li className="hover:brightness-85 bottomBorder">
            <Link to="services">Services</Link>
          </li>
          <li className="hover:brightness-85 bottomBorder">
            <Link to="portfolio">Portfolio</Link>
          </li>
          <li className="hover:brightness-85 bottomBorder">
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      )}
      <div className="flex flex-col md:flex-row justify-between md:items-end max-w-375 w-full mx-auto">
        <div className="flex flex-col pl-12 pt-2 lg:flex-row">
          <span className="text-base bottomBorder max-w-24 lg:border-b-0 lg:border-r lg:pr-3 lg:max-w-28">
            03 9482 2722
          </span>
          <span className="text-base bottomBorder lg:border-b-0 lg:pl-3 lg:max-w-28">
            info@presentationcounts.com.au
          </span>
        </div>
        <div className="mx-12 mt-2">
          <a
            href="https://www.instagram.com/presentationcounts/?hl=en"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
