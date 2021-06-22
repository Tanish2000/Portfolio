import Particles from 'react-particles-js';

const Particle = () => {
  return (
    <div>
      <Particles
        params={{
          "particles": {
            "line_linked": {
              "color": "#aaaaaa"
            },
            "number": {
              "value": 150
            },
            "size": {
              "value": 5
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }}
        style={{
          width: '100%',
          background: `#000000`
        }}
      />
    </div>
  )
}

export default Particle;
