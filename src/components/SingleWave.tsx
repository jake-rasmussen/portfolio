import Wavify from "react-wavify";

const Wave = () => {
  return (
    <Wavify
      fill="#FFFFFF"
      paused={false}
      options={{
        height: 12,
        amplitude: 12,
        speed: 0.2,
        points: 4,
      }}
      className="z-0 m-0 h-12 scale-y-[1.3] p-0"
    />
  );
};

export default Wave;
