import Headshot from "../../assets/images/Headshot.png";
import Image from "next/image";

const AboutMe = () => {

  return (
    <>
      <div className="flex justify-center space-y-24 p-6 pb-16 pt-[27.5rem]">
        <div className="lg:mx-24">
          <h1 className="font-baloo bg-gradient-to-br from-[#FF6000] to-[#FFA559] bg-clip-text p-2 text-center text-7xl font-extrabold tracking-tighter text-transparent">
            About Me
          </h1>
          <div className="flex flex-col items-center content">
            <div className="avatar my-4 xl:my-0 float-left mr-6 flex md:hidden">
              <div className="h-[20rem] w-[20rem] lg:h-[25rem] lg:w-[25rem] rounded-3xl shadow-xl">
                <Image
                  src={Headshot}
                  alt={""}
                  className="rounded-lg border-2 shadow-2xl scale-105"
                />
              </div>
              <div className="h-[20rem] w-[20rem] lg:h-[25rem] lg:w-[25rem] absolute rounded-3xl ring ring-[#FFA559] ring-offset-base-100 ring-offset-4 shadow-xl" />
            </div>
            <div>
              <div className="avatar my-4 xl:my-0 float-left mr-6 hidden md:flex">
                <div className="h-[20rem] w-[20rem] lg:h-[25rem] lg:w-[25rem] rounded-3xl shadow-xl">
                  <Image
                    src={Headshot}
                    alt={""}
                    className="rounded-lg border-2 shadow-2xl scale-105"
                  />
                </div>
                <div className="h-[20rem] w-[20rem] lg:h-[25rem] lg:w-[25rem] absolute rounded-3xl ring ring-[#FFA559] ring-offset-base-100 ring-offset-4 shadow-xl" />
              </div>
              <p className="m-8 text-justify text-xl text-white text-left xl:ml-10 lg:text-2xl">
                Thank you for checking out my portfolio website! Firstly, a little bit about me. 
                I'm from a small town right outside of Philadelphia, and now am in Baltimore studying 
                Computer Science at the Johns Hopkins University. From a very young age, I've always
                had a fascination with technology. I loved playing around with the Raspberry Pi's, and
                I found a passion for coding through exploring Game Development with the Unity Game Engine.
                It didn't take me long to realize that I wanted to pursue Computer Science in the future,
                and I've always kept myself busy with multifaceted projects.
                <br />
                <br />
                These days, I contribute to a lot of different projects, both through school and freelance work.
                I'm always eager to become more involved, so if you're ever interested in a project please
                feel free to reach out to me via the contact form below! Thank you again for checking out my
                website!
              </p>
            </div>
          </div>
          
        </div>

        
      </div>
    </>
  )

}

export default AboutMe;