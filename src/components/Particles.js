import Particles from 'react-particles-js';

const Particle = () => {
  return (
    
      <Particles
        params={{
          "particles": {
            "line_linked": {
              "color": "#aaaaaa",
              "enable" : false
            },
            "number": {
              "value": 150
            },
            "size": {
              "value": 1.2
            },
            "opacity": {
              "value": 0.8,
              "random": false,
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "move": {
              "enable": true,
              "speed": 2,
              "direction": "top",
              "random": true,
              "straight": false,
              "out_mode": "in",
              "bounce": true,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
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
          height : '100%',
          position : 'fixed',
          overflow : 'hidden'
        }}
      />
    
  )
}

export default Particle;
