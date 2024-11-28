import React from "react";
import ParticleBackground from "./particlebackground";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const nav = useNavigate();
    const getstart = () => {
      
      nav('/forms');
    };
  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
  
      <ParticleBackground />

      
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        <h1 className="text-6xl font-bold">Welcome to CraftMyCV</h1>
        <p className="text-lg mt-4">
        Transform your details into a professional CV with just a few clicks – Simple. Fast. Effective.
        </p>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            color: "#fff",
            background: "#1c87c9",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }
        }onClick={getstart}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;

