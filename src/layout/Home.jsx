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
      <div className="my-6">
        <GalleryBrief />
      </div>
      <h1 className="my-90 text-center text-5xl font-bold">Home goes here</h1>
    </main>
  );
};

export default Home;
