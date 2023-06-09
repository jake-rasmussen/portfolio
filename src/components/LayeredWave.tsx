import Wavify from "react-wavify";

const Wave = () => {
  return (
    <>
      {/* FOR DESKTOP */}
      <div className="invisible relative md:visible">
        <Wavify
          fill="url(#gradient)"
          paused={false}
          options={{
            height: 40,
            amplitude: 70,
            speed: 0.2,
            points: 4,
          }}
          className="absolute bottom-0 m-0 h-[17.5rem] p-0 opacity-[50%] md:h-[22.5rem]"
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(70)">
              <stop offset="10%" stopColor="#FF6000" />
              <stop offset="90%" stopColor="#FFA559" />
            </linearGradient>
          </defs>
        </Wavify>
        <Wavify
          fill="url(#gradient)"
          paused={false}
          options={{
            height: 60,
            amplitude: 80,
            speed: 0.2,
            points: 4,
          }}
          className=" absolute bottom-0 m-0 h-[13.5rem] p-0 opacity-[50%] md:h-[18.5rem]"
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(70)">
              <stop offset="10%" stopColor="#FF6000" />
              <stop offset="90%" stopColor="#FFA559" />
            </linearGradient>
          </defs>
        </Wavify>
        <Wavify
          fill="#FFFFFF"
          paused={false}
          options={{
            height: 50,
            amplitude: 30,
            speed: 0.2,
            points: 4,
          }}
          className="absolute bottom-0 z-0 m-0 h-[8rem] scale-y-[1.1] p-0 md:h-[10rem]"
        />
      </div>

      {/* FOR MOBILE */}
      <div className="visible relative md:invisible">
        <Wavify
          fill="url(#gradient)"
          paused={false}
          options={{
            height: 50,
            amplitude: 45,
            speed: 0.2,
            points: 2,
          }}
          className="absolute bottom-0 m-0 h-[17.5rem] p-0 opacity-[50%] md:h-[22.5rem]"
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(70)">
              <stop offset="10%" stopColor="#FF6000" />
              <stop offset="90%" stopColor="#FFA559" />
            </linearGradient>
          </defs>
        </Wavify>
        <Wavify
          fill="url(#gradient)"
          paused={false}
          options={{
            height: 40,
            amplitude: 50,
            speed: 0.2,
            points: 2,
          }}
          className=" absolute bottom-0 m-0 h-[13.5rem] p-0 opacity-[50%] md:h-[18.5rem]"
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(70)">
              <stop offset="10%" stopColor="#FF6000" />
              <stop offset="90%" stopColor="#FFA559" />
            </linearGradient>
          </defs>
        </Wavify>
        <Wavify
          fill="#FFFFFF"
          paused={false}
          options={{
            height: 50,
            amplitude: 30,
            speed: 0.2,
            points: 4,
          }}
          className="absolute bottom-0 z-0 m-0 h-[8rem] scale-y-[1.1] p-0 md:h-[10rem]"
        />
      </div>
    </>
  );
};

export default Wave;
