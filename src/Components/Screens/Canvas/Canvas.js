import React, { useEffect, useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
// import { motion } from "framer-motion";
import "./Canvas.css";

function Canvas() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight * 1,
    width: window.innerWidth * 1,
  });
  const saveableCanvas = useRef();
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight * 1,
        width: window.innerWidth * 1,
      });
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <CanvasDraw
      ref={saveableCanvas}
      hideGrid={true}
      canvasWidth={dimensions.width}
      canvasHeight={dimensions.height}
      hideInterface={true}
      loadTimeOffset={2}
      lazyRadius={5}
      brushRadius={5}
      // saveData={saveableCanvas.current.getSaveData}
      // imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/a1/Nepalese_Mhapuja_Mandala.jpg"
    />
  );
}

export default Canvas;
