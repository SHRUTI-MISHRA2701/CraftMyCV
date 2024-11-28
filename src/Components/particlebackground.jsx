import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (engine) => {
    console.log("Initializing particles...");
    await loadFull(engine); // loads tsparticles features
  };

  const particlesConfig = {
    background: {
      color: "#0e387a", 
    },
    fpsLimit: 120,
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: { min: 1, max: 5 },
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        outModes: {
          default: "out",
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        repulse: {
          distance: 200,
        },
        push: {
          quantity: 4,
        },
      },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />;
};

export default ParticleBackground;
