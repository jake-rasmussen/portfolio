import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { motion } from "framer-motion";

const SocialsMenu = () => {

  return (
    <ul className="py-8 px-2 bg-white rounded-box fixed top-[25%] left-0 m-4 z-0 shadow-xl items-center invisible xl:visible">
      <li className="w-full text-center pt-2 text-[#2C3542] font-semibold">
        My Socials
      </li>
      <li>
        <div className="divider before:bg-[#FFE6C7] after:bg-[#FFE6C7] p-0 m-0"></div>
      </li>
      <li>
        <button
          className="text-[#FF6000] transition duration-300 ease-in-out hover:text-[#FFA559]"
          onClick={() => (location.href = "https://github.com/jake-rasmussen")}
        >
          <IconBrandGithub className="mx-5 h-auto w-14" />
        </button>
      </li>
      <li>
        <button
          className="text-[#FF6000] transition duration-300 ease-in-out hover:text-[#FFA559]"
          onClick={() =>
            (location.href = "https://www.linkedin.com/in/jake-rasmussen-jhu/")
          }
        >
          <IconBrandLinkedin className="mx-5 h-auto w-14" />
        </button>
      </li>
    </ul>
  )

}

export default SocialsMenu;