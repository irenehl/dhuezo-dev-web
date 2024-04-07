import { FC, useCallback } from 'react';
import Particles from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackrgound: FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particleConfig = {
    fullScreen: {
      enable: true,
      zIndex: -10!,
    },
    background: {
      color: {
        value: '#000000',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: 'none' as const,
        enable: true,
        outModes: {
          default: 'bounce' as const,
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1200,
        },
        value: 100,
      },
      opacity: {
        value: 0.2,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles id="tsparticles" init={particlesInit} options={particleConfig} />
  );
};

export default ParticlesBackrgound;
