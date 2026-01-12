import { Link } from "react-router-dom";
import couch from "../assets/images/icons/couch.png";
import design from "../assets/images/icons/design.png";
import bulb from "../assets/images/icons/light-bulb.png";
import Card from "../components/Card";
import Button from "./Button";

const Services = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-center text-4xl font-semibold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 lg:mb-16">
        <Card
          img={couch}
          title="Compelete Property Styling"
          subText="Full Furniture & Decor"
          customStyle="shadow-lg"
        />
        <Card
          img={bulb}
          title="Pre-sale Styling Advice"
          subText="Expert Tips & Guidance"
          customStyle="shadow-lg"
        />
        <Card
          img={design}
          title="Interior Design"
          subText="Custom Styling Solutions"
          customStyle="shadow-lg"
        />
      </div>
      <Link to="services">
        <Button color="text-secondary bg-primary">View All Services</Button>
      </Link>
    </section>
  );
};

export default Services;
