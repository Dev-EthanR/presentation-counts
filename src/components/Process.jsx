import couch from "../assets/images/icons/couch.png";
import Card from "./Card";

const Process = () => {
  return (
    <section className="bg-gray-50 w-full py-7">
      <h2 className="text-center text-3xl font-bold mb-4">
        A SImple, Stress Free Process
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 max-w-375 mx-auto">
        <Card
          img={couch}
          title="Free Consultation"
          subText="Property Assessment"
        />
        <Card
          img={couch}
          title="Free Consultation"
          subText="Property Assessment"
        />
        <Card
          img={couch}
          title="Free Consultation"
          subText="Property Assessment"
        />
        <Card
          img={couch}
          title="Free Consultation"
          subText="Property Assessment"
        />
      </div>
    </section>
  );
};

export default Process;
