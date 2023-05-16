import Wavify from 'react-wavify';

const Wave = () => {

  return (
    <div className="relative">
      <Wavify
        fill="url(#gradient)"
        paused={false}
        options={{
          height: 60,
          amplitude: 50,
          speed: 0.20,
          points: 4,
        }}
        className="absolute bottom-0 z-1 m-0 p-0 h-60 opacity-[50%]"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(70)">
            <stop offset="10%"  stopColor="#FF6000" />
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
          speed: 0.20,
          points: 4,
        }}
        className="absolute bottom-0 z-0 m-0 p-0 h-30 scale-y-[1.1]"
      />
    </div>
  )

}

export default Wave;