import { type NextPage } from "next";
import Head from "next/head";
import Carousel from "~/components/Carousel";
import LayeredWave from "~/components/LayeredWave";
import Projects from "../sections/Projects";
import Footer from "../sections/Footer";
import Contact from "../sections/Contact";
import SingleWave from "../components/SingleWave";
import SocialsMenu from "~/components/SocialsMenu";
import Homepage from "~/sections/Homepage";
import AboutMe from "~/sections/AboutMe";

import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <main className="font-montserrat bg-[#2C3542]">
      <Head>
        <title>Jake Rasmussen</title>
        <meta name="description" content="Jake Rasmussen Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <Homepage />

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
        className="bg-white h-1 mx-4 md:mx-20" 
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
