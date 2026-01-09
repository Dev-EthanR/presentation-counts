import logo from "../assets/images/logo.png";
import bg from "../assets/images/bg.jpg";

const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-size-[83px] min-h-40 w-full text-2xl flex items-center justify-center text-white"
    >
      Footer
    </div>
  );
};

export default Header;
