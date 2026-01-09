import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
const Page = () => {
  return (
    <div className="flex flex-col h-dvh">
      <Header />
      <NavBar />
      <div className="grow flex justify-center items-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
