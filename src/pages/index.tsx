import { type NextPage } from "next";
import Head from "next/head";
import Carousel from "~/components/Carousel";
import LayeredWave from "~/components/LayeredWave";
import Projects from "../sections/Projects";
import Footer from "../sections/Footer";
import Contact from "../sections/Contact";
import SingleWave from "../components/SingleWave";
import SocialsMenu from "~/components/SocialsMenu";
import AboutMe from "~/sections/AboutMe";

import { motion } from "framer-motion";
import Hero from "~/sections/Hero";

const Home: NextPage = () => {
  return (
    <main className="bg-[#2C3542] font-montserrat">
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
        <div className="overflow-x-hidden bg-white">
          <Carousel />
        </div>
        <div className="relative scale-y-[-1]">
          <LayeredWave />
        </div>
      </section>

      <AboutMe />
      <motion.div
        whileInView="visible"
        initial="hidden"
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        variants={{
          visible: { scaleX: 1 },
          hidden: { scaleX: 0 },
        }}
        className="mx-4 h-1 bg-white md:mx-20"
      />
      <Projects />

      <div>
        <SingleWave />
      </div>
      <Contact />
      <div className="scale-y-[-1]">
        <SingleWave />
      </div>

      <SocialsMenu />
      <Footer />
    </main>
  );
};

export default Home;
