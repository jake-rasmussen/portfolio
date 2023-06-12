import { motion } from "framer-motion";
import FaceOutline from "~/components/FaceOutline";
const Hero = () => {

  return (

    <main className="flex p-0 m-0 h-screen pb-[20rem] pt-[5rem] w-screen">
      <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full">
        <FaceOutline />
        <div className="flex flex-col items-right">
          <motion.div
            className="bg-gradient-to-br from-[#FF6000] to-[#FFA559] bg-clip-text text-center pb-8"
            initial="hidden"
            whileInView="visible"
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            variants={{
              visible: { opacity: 1, scale: 1.0 },
              hidden: { opacity: 0, scale: 0.5 },
            }}
          >
            <span className="font-raleway text-5xl md:text-6xl font-extrabold tracking-narrow text-transparent lg:text-7xl xl:text-[5rem] ">Jake Rasmussen</span>
          </motion.div>


          <div className="flex flex-col items-center justify-center px-4">
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className="flex flex-row items-center"
            >
              <motion.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="text-center text-sm sm:text-base"
              >
                Frontend Developer
              </motion.div>
              <div className="divider divider-horizontal mx-1 sm:mx-4" />
              <motion.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="text-center text-sm sm:text-base"
              >
                Student
              </motion.div>
              <div className="divider divider-horizontal mx-1 sm:mx-4" />
              <motion.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-center text-sm sm:text-base"
              >
                Fullstack Engineer
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

    </main>
  );
};

export default Hero;
