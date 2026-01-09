import logo from "../assets/images/logo.png";
import bg from "../assets/images/bg.jpg";

const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-size-[83px] h-40 text-2xl flex flex-col items-center pt-4"
    >
      <img className="" src={logo} alt="Presentation Counts Logo" />
      <span className="text-[#fefdfd] tracking-widest uppercase font-sans text-1xl">
        property stylists
      </span>
    </div>
  );
};

export default Header;
