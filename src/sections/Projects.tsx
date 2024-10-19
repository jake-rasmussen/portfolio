import {
  IconBrandTailwind,
  IconBrandNextjs,
  IconDatabase,
  IconBrandSwift,
  IconDeviceMobile,
  IconBellRinging,
  IconBrandUnity,
  IconBrandBlender,
  IconUsers,
  IconBusinessplan,
  IconChartBubble,
  IconMicrophone2,
  IconCode,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import WhizKidsPage from "../../assets/images/WK_Homepage.png";
import CampusConnect from "../../assets/images/CampusConnect.png";
import Splitit1 from "../../assets/images/Create Event.png";
import Splitit2 from "../../assets/images/Join Rideshare.png";
import Splitit3 from "../../assets/images/Chat.png";
import Delineo from "../../assets/images/Delineo.png";
import Link from "next/link";

const Projects = () => {
  const [ref0, inView0] = useInView({ threshold: 0.35 });
  const [ref1, inView1] = useInView({ threshold: 0.35 });
  const [ref2, inView2] = useInView({ threshold: 0.35 });
  const [ref3, inView3] = useInView({ threshold: 0.35 });

  return (
    <section className="overflow-x-hidden text-white">
      <div className="container mx-auto max-w-2xl space-y-24 p-6 pb-28 pt-20 lg:max-w-7xl lg:px-4">
        <div>
          <h1 className="tracking-narrow bg-gradient-to-br from-[#FF6000] to-[#FFA559] bg-clip-text p-2 text-center font-raleway text-7xl font-extrabold text-transparent">
            My Projects
          </h1>
          <p className="mx-auto mt-4 text-center text-2xl">
            I love to code, and have taken on a wide range of{" "}
            <span className="whitespace-nowrap">projects over the years.</span>
          </p>
        </div>

        <motion.div
          ref={ref0}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          animate={inView0 ? { opacity: 1, x: 0 } : { opacity: 0, x: "5rem" }}
        >
          <div className="grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight sm:text-5xl">
                Campus Connect
              </h3>
              <p className="mt-3 text-xl">
                Advancing my startup idea to enhance the student led startup ecosystem
                by connecting students across universities.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <IconBusinessplan className="h-full w-full text-[#FF6000]" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold leading-6">
                      Gaining Business Side Experience
                    </h4>
                    <p className="mt-2">
                      Through the accelerator, I&apos;ve gained significant development
                      and understanding of how to get a startup off the ground
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <IconMicrophone2 className="h-full w-full text-[#FF6000]" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold leading-6">
                      Practice Pitching to Venture Capitalists
                    </h4>
                    <p className="mt-2">
                      Gained significant practice with pitching to VC&apos;s, and preparing
                      for a final pitch with hundreds of judges and investors present
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <IconCode className="h-full w-full text-[#FF6000]" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold leading-6">
                      Advacement of Technical Skillset
                    </h4>
                    <p className="mt-2">
                      Continuing to gain experience building end-to-end apps. Using T3 Stack, which
                      has been my go-to for development for years
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:col-start-1 lg:row-start-1 lg:mt-0">
              <div aria-hidden="true" className="mt-10 lg:mt-0">
                <Image
                  src={CampusConnect}
                  alt={""}
                  className="mx-auto rounded-lg border-2 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref1}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: "-5rem" }}
        >
          <div className="grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-5xl">
                Whiz Kids Baseball
              </h3>
              <p className="mt-3 text-xl">
                Worked with a partner to develop a website for a
                travel baseball organization based out of Philadelphia.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <IconBrandTailwind className="h-full w-full text-[#FF6000]" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold leading-6">
                      TailwindCSS with React and Typescript
                    </h4>
                    <p className="mt-2">
                      Gained proficiency with using a combination of
                      TailwindCSS with React and Typescript to create stylized
                      components and pages
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <IconBrandNextjs className="h-full w-full text-[#FF6000]" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold leading-6">
                      Comfortability with NextJS
                    </h4>
                    <p className="mt-2">
                      Our website is built upon NextJS to increase the
                      site&apos;s SEO, and help better the website&apos;s
                      efficiency as a whole
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <IconDatabase className="h-full w-full text-[#FF6000]" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold leading-6">
                      Managing Databases with tRPC
                    </h4>
                    <p className="mt-2">
                      Throughout the project, gained experience with
                      managing a PostGres database by using tRPC to build out
                      the API
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <Image
                src={WhizKidsPage}
                alt={""}
                className="mx-auto rounded-lg border-2 shadow-2xl"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref2}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: "5rem" }}
        >
          <div className="grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight sm:text-5xl">
                Split.it Rideshare App
              </h3>
              <p className="mt-3 text-xl">
                Developed the mobile version of the ridesharing app, Split.it.
                Worked collaboratively with a team of 8 fellow Johns Hopkins
                students.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <IconBrandSwift className="h-full w-full text-[#FF6000]" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold leading-6">
                      Gained Proficiency with Swift and Xcode
                    </h4>
                    <p className="mt-2">
                      Throughout the project, I&apos;ve solidifed my Swift
                      skills, and gained comfortability working in the Xcode IDE
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <IconDeviceMobile className="h-full w-full text-[#FF6000]" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold leading-6">
                      Comfortability with Developing in a Mobile Format
                    </h4>
                    <p className="mt-2">
                      Worked on making a native mobile app, which involved a lot
                      of new styling features and procedures to develop the UI
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <IconBellRinging className="h-full w-full text-[#FF6000]" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold leading-6">
                      Push Notification Capable
                    </h4>
                    <p className="mt-2">
                      Helped developed a system to allow the App to be Push
                      Notification Capable, so that the user could be notified
                      for an upcoming ride
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:col-start-1 lg:row-start-1 lg:mt-0">
              <Link href="https://www.trysplit.it/" passHref={true} target="_blank">
                <div className="grid grid-cols-3 gap-2">
                  <Image
                    src={Splitit1}
                    alt={""}
                    className="mx-auto rounded-lg border-2 shadow-2xl"
                  />
                  <Image
                    src={Splitit2}
                    alt={""}
                    className="mx-auto rounded-lg border-2 shadow-2xl"
                  />
                  <Image
                    src={Splitit3}
                    alt={""}
                    className="mx-auto rounded-lg border-2 shadow-2xl"
                  />
                </div>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref3}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: "-5rem" }}
        >
          <div className="grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-5xl">
                The Delineo Project
              </h3>
              <p className="mt-3 text-xl">
                Worked on a Johns Hopkins research project tasked with
                simulating infectious diseases and various mandates to try to
                reduce transmission.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <IconBrandUnity className="h-full w-full text-[#FF6000]" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold leading-6">
                      Unity Game Engine
                    </h4>
                    <p className="mt-2">
                      Developed an AI to simulate the spread of infectious
                      disease, numerous UI changes to enhance user experience,
                      and modeled the enviornment
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <IconBrandBlender className="h-full w-full text-[#FF6000]" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold leading-6">
                      Experience with Blender
                    </h4>
                    <p className="mt-2">
                      Created new models, targeted towards making the
                      simulation run more smoothly while creating an interesting
                      atmosphere for the user
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <IconUsers className="h-full w-full text-[#FF6000]" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold leading-6">
                      Large Team Project
                    </h4>
                    <p className="mt-2">
                      The project involved working with many different teams,
                      which involved correspondence with teams transcending my
                      Unity team
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <Link href="https://covidweb.isi.jhu.edu/simulator" passHref={true} target="_blank">
                <Image
                  src={Delineo}
                  alt={""}
                  className="mx-auto rounded-lg border-2 shadow-2xl"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
