import { CiLocationOn } from "react-icons/ci";
import { PiCreditCardDuotone } from "react-icons/pi";

import handshake from "../assets/images/handshake.png";
import badge from "../assets/images/badge.png";

const TrustStrip = () => {
  return (
    <section className="grid grid-cols-2 gap-2 items-center lg:grid-cols-4 px-2 lg:px-10 py-5 bg-gray-50 shadow-lg md:text-xl text-sm font-semibold">
      <span className="flex items-center gap-3">
        <img className="md:w-10 w-5" src={badge} alt="" />
        20- Years Experience
      </span>
      <span className="flex items-center gap-3">
        <CiLocationOn className="w-5 h-5 md:w-10  md:h-10" />
        Melbourne Based
      </span>
      <span className="flex items-center gap-3">
        <PiCreditCardDuotone className="w-5 h-5 md:w-10  md:h-10" />
        No Upfront fee Option
      </span>
      <span className="flex items-center gap-3 ">
        <img className="md:w-10 w-5" src={handshake} alt="" />
        Trusted by Agents <br /> & Homeowners
      </span>
    </section>
  );
};

export default TrustStrip;
