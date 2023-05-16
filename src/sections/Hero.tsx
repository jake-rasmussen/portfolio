import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex h-[100vh] flex-col items-center bg-[#2C3542] justify-center overflow-x-hidden">
      <div className="container flex flex-col items-center px-4 sm:py-8">
        <div className="flex flex-col pb-24">

          <motion.div
            initial="hidden"
            whileInView="visible"
            className="text-2xl tracking-tight text-white ml-4 font-light hidden sm:block"
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            variants={{
              visible: { opacity: 1, scale: 1.0 },
              hidden: { opacity: 0, scale: 1.5 }
            }}
          >
            Hi, my name is
          </motion.div>

          <motion.div
            className="text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#FF6000] to-[#FFA559] tracking-tighter text-center sm:text-left"
            initial="hidden"
            whileInView="visible"
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.1,
              ease: [0, 0.71, 0.2, 1.01]
          }}
          variants={{
            visible: { opacity: 1, scale: 1.0 },
            hidden: { opacity: 0, scale: 0.5}
          }}
          >
            Jake Rasmussen
          </motion.div>
        </div>
      </div>

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

    </section>
  );
}

export default Hero;