import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";

import Services from "../components/Services";
import Process from "../components/Process";
import GalleryBrief from "../components/GalleryBrief";
const Home = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <TrustStrip />
      <div className="my-6">
        <Services />
      </div>
      <Process />
      <GalleryBrief />
      <section className="text-center py-6">
        <h2 className="text-xl lg:text-3xl font-bold mb-3">
          No Upfront Fee Option Available
        </h2>
        <p className="text-sm max-w-80 lg:max-w-full lg:text-xl text-secondary font-semibold mb-4">
          small initial deposit on quote acceptance, balance payable on ???
          (conditions apply).
        </p>
        <a
          href="tel+61-394-822-722"
          className="text-gray-900 text-base lg:text-2xl font-bold"
        >
          03 9482 2722
        </a>
      </section>
    </main>
  );
};

export default Home;
