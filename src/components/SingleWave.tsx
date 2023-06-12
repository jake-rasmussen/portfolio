import Wavify from "react-wavify";

const Wave = () => {
  return (
    <Wavify
      fill="#FFFFFF"
      paused={false}
      options={{
        height: 20,
        amplitude: 20,
        speed: 0.2,
        points: 4,
      }}
      className="z-0 m-0 h-24 scale-y-[1.3] p-0"
    />
  );
};

export default Wave;
