import phone from "../assets/images/icons/phone-ringing.png";
import clipboard from "../assets/images/icons/clipboard.png";
import installation from "../assets/images/icons/installation.png";
import removal from "../assets/images/icons/removal.png";
import Card from "./Card";

const Process = () => {
  return (
    <section className="bg-gray-50 w-full py-7">
      <h2 className="text-center text-3xl font-bold mb-4">
        A SImple, Stress Free Process
      </h2>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-375 mx-auto">
        <Card
          img={phone}
          title="Free Consultation"
          subText="Property Assessment"
        />
        <Card
          img={clipboard}
          title="Tailored Styling Plan"
          subText="Design & Selection"
        />
        <Card
          img={installation}
          title="Professional Installation"
          subText="Setup & Styling"
        />
        <Card
          img={removal}
          title="Removal After Sale"
          subText="Furniture Removal"
        />
      </div>
    </section>
  );
};

export default Process;
