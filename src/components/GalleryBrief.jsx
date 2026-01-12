import { Link } from "react-router-dom";
import Button from "./Button";
import imageOne from "../assets/images/gallery/house2_3.jpg";
import imageTwo from "../assets/images/gallery/gallery-2.jpg";
import imageThree from "../assets/images/gallery/house10_4.jpg";
import imageFour from "../assets/images/gallery/gallery-1.jpg";

const GalleryBrief = () => {
  return (
    <section className="w-full py-7 flex flex-col items-center gap-6">
      <h2 className="text-center text-3xl font-bold mb-4">
        Homes We've Styled
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 max-w-375 mx-auto gap-4">
        <div className="h-63 w-70">
          <img
            className="h-full w-full object-cover"
            src={imageOne}
            alt="lounge room on timber floors, white suite"
          />
        </div>
        <div className="h-63 w-70">
          <img className="h-full w-full object-cover" src={imageTwo} alt="" />
        </div>
        <div className="h-63 w-70">
          <img className="h-full w-full object-cover" src={imageThree} alt="" />
        </div>
        <div className="h-63 w-70">
          <img className="h-full w-full object-cover" src={imageFour} alt="" />
        </div>
      </div>
      <Link to="portfolio">
        <Button color="text-white bg-secondary">View Portfolio</Button>
      </Link>
    </section>
  );
};

export default GalleryBrief;
