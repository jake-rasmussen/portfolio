import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {

  const [ref, inView] = useInView({ threshold: 0 });

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center overflow-x-hidden bg-[#2C3542]">

      <div className="container flex justify-center">
        <motion.svg
          ref={ref}
          viewBox="0 0 1000 1000"
          className="top-0 sm:left-0 w-[12.5rem] h-[12.5rem] absolute m-8 left-1/2 -translate-x-2/3 sm:translate-x-0"
          stroke="white"
          fill="none"
          strokeWidth={15}
        >
          <motion.path
            d="M619.31,390.72c-1.08,6.63-1.06,14.41-.46,17.83,2.3,13.2,9.51,17.95,14.61,36.09,1.33,4.7,1.86,8,1.2,11.79-1.24,7.16-10.62,22.78-13.58,26.37M381.25,455.06c1.81,18.08,4.42,26.65,7.09,36.46,4,14.51,6.08,17.09,8.54,29.52,3,15.35,1.29,19,3.5,38.81,2.32,20.71,3.47,31.07,7.72,37.95,2.19,3.55,1.78,13.18,40.25,28.14,20,7.8,32.79,12.71,47.68,18,19.64,7,29.46,10.46,42.24,11.68,20.61,2,56.89-.62,67-20.82,3.09-6.16-1.4-15.09-.62-31.37,1.44-29.94,3.3-44.58,13.78-66m-247.92,4c1.81,8.92,3.38,22.43,4.54,32.53a310.39,310.39,0,0,1,.72,70c-3.41,31.84-2.62,38.57-3.76,54.17-.9,12.22,11.86,17.66,23.48,27.32,39.52,32.87,84.32,35.86,92.29,36.28,16.19.86,24.28,2.51,31.39-1.5,11.77-6.63,18.17-94.55,17.47-98M396.16,536.68c-2.07,2.73-5.39,6.12-10.12,7.22-10.47,2.44-20.46-8-30.52-18.51-20.5-21.42-25-41.18-25.95-45.59-2.59-12.4-.6-17.75.36-19.88,5.39-12,19.76-15.15,22.37-15.72,13.17-2.89,16.15,8.3,32.59,7.93,2.14-.05,14.12-.5,24.25-8.54a39.53,39.53,0,0,0,10.38-13c13.15-24.44,38.87-45.11,48.83-53.12,9.74-7.82,21.26-16.93,39.07-23.5,7.89-2.92,22.28-8.26,41.39-7.46,12.94.54,26.6,1.11,36.36,10.58,4.71,4.56,5.32,8.1,14.15,18.26,6.63,7.64,9.79,11.59,13,13.2,14.17,7.12,31.74-3.52,33.5-4.62a47.67,47.67,0,0,0,14.6-14.69c31.1-46.36,42.42-45.54,42.05-61.26-.55-23.05-25.35-43.94-47.2-49.42-11.67-2.92-12.37,1.09-34.93.12-12.65-.55-22.85-2.26-59.47-11.08-40.86-9.84-39.54-10.44-47.92-12-36.6-6.58-67.26,4.08-92.06,12.69-37.71,13.1-91.44,31.77-116,83.19-13.48,28.16-12.6,54.39-11.87,76.09,1.63,48.25,19.85,84.15,33,109.46,14.66,28.13,26.81,56.73,46.78,64.93M597.6,537.46c12.51,0,43.22.17,45.43-14.33,1.28-8.45-5.54-18.79-9.34-24.82-7.12-11.25-25.87-26.07-31.61-48"
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{
              delay: inView ? 0.5 : 0,
              duration: inView ? 2 : 0, 
              ease: "easeInOut",
            }}
          />
        </motion.svg>
        <motion.svg
          ref={ref}
          viewBox="0 0 1000 1000"
          className="top-0 sm:left-0 w-[12.5rem] h-[12.5rem] absolute m-8 left-1/2 -translate-x-2/3 sm:translate-x-0"
          stroke="#FF6600"
          fill="none"
          strokeWidth={25}
        >
          <motion.path
            d="M829.19,654.59V311a40.63,40.63,0,0,0-19.94-35L520.55,105.12a40.64,40.64,0,0,0-41.41,0L190.43,276a40.64,40.64,0,0,0-19.93,35V654.59a40.64,40.64,0,0,0,19.93,35L479.14,860.47a40.64,40.64,0,0,0,41.41,0l288.7-170.91A40.63,40.63,0,0,0,829.19,654.59Z"
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{
              delay: inView ? 0.5 : 0,
              duration: inView ? 2 : 0, 
              ease: "easeInOut",
            }}
          />
        </motion.svg>
      </div>

      <div className="flex flex-col items-center justify-center px-4 sm:py-8">
        <div className="flex flex-col pb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            className="font-montserrat ml-4 hidden text-2xl tracking-tight text-white sm:block"
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            variants={{
              visible: { opacity: 1, scale: 1.0 },
              hidden: { opacity: 0, scale: 1.5 },
            }}
          >
            Hi, my name is
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-[#FF6000] to-[#FFA559] bg-clip-text text-center font-baloo text-7xl font-extrabold tracking-tighter text-transparent sm:text-left md:text-8xl lg:text-[9rem]"
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
            Jake Rasmussen
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="flex flex-row items-center pb-24"
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
    </main>
  );
};

export default Hero;
