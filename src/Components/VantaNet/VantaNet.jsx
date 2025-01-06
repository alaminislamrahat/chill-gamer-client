import React, { useEffect, useRef } from "react";

const VantaNet = ({ children }) => {
  const vantaRef = useRef(null);
  let vantaEffect = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const loadVantaEffect = async () => {
      try {
        // Load Three.js if not already loaded
        if (!window.THREE) {
          const threeScript = document.createElement("script");
          threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
          threeScript.async = true;
          document.body.appendChild(threeScript);
          await new Promise((resolve) => (threeScript.onload = resolve));
        }

        // Load Vanta.NET script
        const vantaScript = document.createElement("script");
        vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js";
        vantaScript.async = true;
        document.body.appendChild(vantaScript);
        await new Promise((resolve) => (vantaScript.onload = resolve));

        // Initialize Vanta.NET effect
        if (isMounted && window.VANTA && vantaRef.current) {
          vantaEffect.current = window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: window.innerHeight,
            minWidth: window.innerWidth,
            scale: 1.1,
            scaleMobile: 1.1,
            color: 0x1e90ff, // Neon blue color
            backgroundColor: 0x000000, // Black background
            points: 15.0,
            maxDistance: 20.0,
            spacing: 20.0,
          });
        }
      } catch (error) {
        console.error("Error loading Vanta scripts:", error);
      }
    };

    loadVantaEffect();

    return () => {
      isMounted = false;
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div
    className="-z-10"
      ref={vantaRef}
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default VantaNet;
