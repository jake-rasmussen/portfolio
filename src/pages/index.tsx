import { type NextPage } from "next";
import Head from "next/head";
import Carousel from "~/components/Carousel";
import LayeredWave from "~/components/LayeredWave";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Footer from "../sections/Footer";
import Contact from "../sections/Contact";
import SingleWave from "../components/SingleWave";

const Home: NextPage = () => {
  return (
    <main className="bg-[#2C3542] font-sans">
      <Head>
        <title>Jake Rasmussen</title>
        <meta name="description" content="Jake Rasmussen Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Hero />

      <section>
        <div className="relative">
          <LayeredWave />
        </div>
        <div className="bg-white overflow-x-hidden">
          <Carousel />
        </div>
        <div className="relative scale-y-[-1]">
          <LayeredWave />
        </div>
      </section>

      <Projects />

      <div>
        <SingleWave />
      </div>
      <Contact />
      <div className="scale-y-[-1]">
        <SingleWave />
      </div>
      
      <Footer />
    </main>
  );
};

export default Home;
