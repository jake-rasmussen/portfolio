import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const SocialsMenu = () => {
  return (
    <ul className="rounded-box invisible fixed left-0 top-[25%] z-0 m-4 items-center bg-white px-2 py-8 shadow-xl xl:visible">
      <li className="w-full pt-2 text-center font-semibold text-[#2C3542]">
        My Socials
      </li>
      <li>
        <div className="divider m-0 p-0 before:bg-[#FFE6C7] after:bg-[#FFE6C7]"></div>
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
  );
};

export default SocialsMenu;
