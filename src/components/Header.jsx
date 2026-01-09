import logo from "../assets/images/logo.png";
import bg from "../assets/images/bg.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-size-[83px] h-40 text-2xl flex flex-col items-center pt-4"
    >
      <Link to="/">
        <img
          className="select-none"
          src={logo}
          alt="Presentation Counts Logo"
        />
      </Link>
      <span className="text-[#fefdfd] tracking-widest uppercase font-sans text-1xl">
        property stylists
      </span>
    </div>
  );
};

export default Header;
