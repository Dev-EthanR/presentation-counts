import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ImageTwo from "../assets/images/gallery/house12_5.jpg";
import ImageThree from "../assets/images/gallery/house3_6.jpg";
import ImageOne from "../assets/images/gallery/house5_2.jpg";
import logo from "../assets/images/logo.png";
import useIsMobile from "../hooks/useIsMobile";
import Button from "./Button";

const Hero = () => {
  const background = [ImageOne, ImageTwo, ImageThree];
  const [image, setImage] = useState(background[0]);
  const index = useRef(0);

  useEffect(() => {
    const handle = setInterval(() => {
      index.current += 1;
      if (index.current >= background.length) index.current = 0;
      setImage(background[index.current]);
    }, 3000);
    return () => clearInterval(handle);
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${image})`,
    height: useIsMobile() ? "200px" : "500px",
    width: useIsMobile() ? "100vw" : "99.3vw",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: useIsMobile() ? "center" : "center bottom",
  };
  return (
    <section>
      <div className="relative" style={backgroundStyle}>
        <div className="bg-black absolute top-0 w-full h-full opacity-60 z-10"></div>
        <div className="absolute top-0 w-full h-full z-20 flex items-center justify-start flex-col pt-2 lg:pt-10">
          <img className="mb-2 lg:mb-7 h-10 lg:h-20" src={logo} alt="logo" />
          <h1 className="text-white text-base lg:text-3xl font-semibold mb-2 lg:mb-9">
            Considered Styling. Elevated Results.
          </h1>
          <p className="text-white max-w-137.5 text-center mb-3 lg:mb-15">
            Professional property styling across
            {!useIsMobile() && "and interior presentation "} Melbourne
            {!useIsMobile() &&
              ", helping homes attract buyers and achieve stronger sale results"}
          </p>
          <div className="flex items-center justify-between max-w-125 flex-col lg:flex-row gap-2 lg:gap-16">
            <Link to="quote">
              <Button color="text-secondary bg-primary">
                Request a Free Quote
              </Button>
            </Link>
            <a
              href="tel+61-394-822-722"
              className="text-white text-base lg:text-3xl font-bold"
            >
              03 9482 2722
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
