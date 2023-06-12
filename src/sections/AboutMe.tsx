import Headshot from "../../assets/images/Headshot.png";
import Image from "next/image";

const AboutMe = () => {
  return (
    <>
      <div className="flex justify-center space-y-24 p-6 pb-16 pt-[20rem] md:pt-[27.5rem]">
        <div className="mx-4 xl:mx-24">
          <h1 className="tracking-narrow bg-gradient-to-br from-[#FF6000] to-[#FFA559] bg-clip-text p-2 text-center font-raleway text-7xl font-extrabold text-transparent">
            About Me
          </h1>
          <p className="mx-auto mt-4 mb-10 text-center text-2xl text-white">
            Thanks for checking out my <span className="whitespace-nowrap">portfolio site!</span>
          </p>
          <div className="flex flex-col md:flex-row items-center">
            <div className="avatar my-4 mr-6 xl:my-0">
              <div className="h-[20rem] md:h-[25rem] w-[20rem] md:w-[15rem] lg:w-[25rem] rounded-3xl shadow-xl">
                <Image
                  src={Headshot}
                  alt={""}
                  className="rounded-xl shadow-2xl h-full object-cover"
                />
              </div>
              <div className="absolute h-[20rem] md:h-[25rem] w-[20rem] md:w-[15rem] lg:w-[25rem] rounded-3xl shadow-xl ring ring-[#FFA559] ring-offset-4 ring-offset-base-100 animate-pulse" />
            </div>
            <div>
              <p className="m-8 text-left text-base lg:text-[1.1rem] text-white xl:text-xl xl:ml-10">
                I&apos;m from a small town right outside of Philadelphia, and now am in
                Baltimore studying Computer Science at Johns Hopkins University.
                From a very young age, I&apos;ve always had a fascination with
                technology. I loved playing around with the Raspberry Pi, and I
                found a passion for coding through exploring Game Development
                with the Unity Game Engine. It didn&apos;t take me long to
                realize that I wanted to pursue Computer Science in the future,
                and I&apos;ve always kept myself busy with multifaceted
                projects.
                <br />
                <br />
                These days, I contribute to a lot of different projects, both
                through school and freelance work. I&apos;m always eager to
                become more involved, so if you&apos;re ever interested in a
                project please feel free to reach out to me via the contact
                form. Thank you again for checking out my website!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
