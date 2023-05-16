import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Signature from "../../assets/images/Signature.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-[#2C3542] py-10 text-center items-center flex flex-col justify-center">
      <div className="flex justify-center">
        <button 
          className="transition duration-300 ease-in-out hover:scale-[150%] text-[#FF6000] hover:text-[#FFA559]"
          onClick={() => location.href = "https://github.com/jake-rasmussen"}
        >
          <IconBrandGithub className="w-14 h-auto mx-5"/>
        </button>
        
        <button 
          className="transition duration-300 ease-in-out hover:scale-[150%] text-[#FF6000] hover:text-[#FFA559]"
          onClick={() => location.href = "https://www.linkedin.com/in/jake-rasmussen-jhu/"}
        >
          <IconBrandLinkedin className="w-14 h-auto mx-5" />
        </button>
      </div>

      <div className="p-4 text-center font-bold text-white w-full flex justify-center">
        <div className="divider w-10/12 md:w-1/2">Thank you for checking <br className="block sm:hidden"/>out my website!</div>
      </div>

      <Image src={Signature} alt="" className="h-24 w-auto"/>

    </footer>
  )

}

export default Footer;