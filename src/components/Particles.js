import Particles from 'react-particles-js';

const Particle = () => {
  return (

    <Particles
      params={{
        "particles": {
          "line_linked": {
            "color": "#aaaaaa",
            "enable": false,
          },
          "number": {
            "value": 60
          },
          "size": {
            "value": 1
          },
          "opacity": {
            "value": 0.8,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 0.5,
              "opacity_min": 0.1,
              "sync": true
            }
          },
          "move": {
            "enable": true,
            "speed": 0.5,
            "direction": "random",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": true,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          },
          "shape" : {
            "type" : "star",
          },
        },
        "interactivity": {
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            'retina_detect': false
          },
          'modes': {
            'grab': {
              'distance': 100,
              'line_linked': {
                'opacity': 0.2,
                'speed': 1
              }
            }
          }
        },
      }}
      style={{
        width: '100%',
        height: 'auto',
        position: 'fixed',
        overflow: 'hidden',

      }}
    />

  )
}

export default Particle;
