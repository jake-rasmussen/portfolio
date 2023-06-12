import Wavify from "react-wavify";

const Wave = () => {
  return (
    <div className="relative">
      <Wavify
        fill="#013b49"
        paused={false}
        options={{
          height: 20,
          amplitude: 40,
          speed: 0.2,
          points: 4,
        }}
        className="absolute bottom-0 z-50 m-0 h-[10rem] p-0"
      />

      <Wavify
        fill="#005164"
        paused={false}
        options={{
          height: 80,
          amplitude: 80,
          speed: 0.2,
          points: 4,
        }}
        className="absolute bottom-[-2rem] z-40 m-0 h-[20rem] rotate-[-5deg] scale-x-125 p-0"
      />

      <Wavify
        fill="#a6624d"
        paused={false}
        options={{
          height: 100,
          amplitude: 40,
          speed: 0.2,
          points: 4,
        }}
        className="absolute bottom-0 z-30 m-0 h-[30rem] p-0"
      />

      <Wavify
        fill="#ef9d53"
        paused={false}
        options={{
          height: 100,
          amplitude: 80,
          speed: 0.2,
          points: 4,
        }}
        className="absolute bottom-0 z-20 m-0 h-[45rem] rotate-[5deg] scale-x-125 p-0"
      />

      {/* 
      
      
      <Wavify
        fill="#FF6000"        
        paused={false}
        options={{
          height: 60,
          amplitude: 50,
          speed: 0.2,
          points: 4,
        }}
        className="z-1 absolute bottom-0 m-0 h-[45rem] p-0 opacity-[60%]"
      >
      </Wavify>
      <Wavify
        fill="#FF6000"
        paused={false}
        options={{
          height: 60,
          amplitude: 50,
          speed: 0.2,
          points: 4,
        }}
        className="z-1 absolute bottom-0 m-0 h-[30rem] p-0 opacity-[60%]"
      >
      </Wavify>
      */}
    </div>
  );
};

export default Wave;
