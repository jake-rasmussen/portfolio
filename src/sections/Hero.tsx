import { motion } from "framer-motion";
import FaceOutline from "~/components/FaceOutline";

const Hero = () => {
  return (
    <main className="m-0 flex h-screen w-screen p-0 pb-[20rem] pt-[5rem]">
      <div className="flex w-full flex-col items-center justify-center md:flex-row-reverse">
        <FaceOutline />
        <div className="items-right flex flex-col">
          <motion.div
            className="bg-gradient-to-br from-[#FF6000] to-[#FFA559] bg-clip-text pb-8 text-center"
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
            <span className="tracking-narrow font-raleway text-5xl font-extrabold text-transparent md:text-6xl lg:text-7xl xl:text-[5rem] ">
              Jake Rasmussen
            </span>
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
