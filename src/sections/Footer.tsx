import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Signature from "../../assets/images/Signature.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center justify-center bg-[#2C3542] py-10 text-center">
      <div className="block flex justify-center xl:hidden">
        <button
          className="text-[#FF6000] transition duration-300 ease-in-out hover:scale-[150%] hover:text-[#FFA559]"
          onClick={() => (location.href = "https://github.com/jake-rasmussen")}
        >
          <IconBrandGithub className="mx-5 h-auto w-14" />
        </button>

        <button
          className="text-[#FF6000] transition duration-300 ease-in-out hover:scale-[150%] hover:text-[#FFA559]"
          onClick={() =>
            (location.href = "https://www.linkedin.com/in/jake-rasmussen-jhu/")
          }
        >
          <IconBrandLinkedin className="mx-5 h-auto w-14" />
        </button>
      </div>

      <div className="flex w-full justify-center p-4 text-center font-bold text-white">
        <div className="divider w-10/12 md:w-1/2">
          Thank you for checking <br className="block sm:hidden" />
          out my website!
        </div>
      </div>

      <Image src={Signature} alt="" className="h-24 w-auto" />
    </footer>
  );
};

export default Footer;
