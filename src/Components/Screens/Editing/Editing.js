import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ReactComponent as AddPage } from "../Editing/Addpage.svg";
import { ReactComponent as SepLine } from "../Editing/Sepline.svg";
import { ReactComponent as Comment } from "../Editing/Comment.svg";
import { ReactComponent as Copy } from "../Editing/Copy.svg";
import { ReactComponent as Export } from "../Editing/Export.svg";
import { ReactComponent as Highlight } from "../Editing/Highlight.svg";
import { ReactComponent as Save } from "../Editing/Save.svg";
import { ReactComponent as Delete } from "../Editing/Delete.svg";
import { ReactComponent as Setting } from "../Editing/Setting.svg";
import "../Editing/Editing.css";
import CanvasDraw from "react-canvas-draw";

// Canvas and Canvas js is out for a while

function Editing() {
  return (
    <div>
      <Drawer />
    </div>
  );
}

const Drawer = () => {
  const [isOpen, setOpen] = useState(false);
  const performAction = (e) => {
    console.log("Pressed");
    if (isOpen) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  // Coding for Canvas and its properties
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
  const saveData = () => {
    localStorage.setItem("savedDrawing", saveableCanvas.current.getSaveData());
    console.log("Data Saved");
  };
  const loadData = () => {
    saveableCanvas.current.loadSaveData(localStorage.getItem("savedDrawing"));
    console.log("Data Loaded");
  };
  const clearData = () => {
    saveableCanvas.current.clear();
    console.log("Cleared");
  };
  return (
    <div>
      <motion.div
        className="container"
        animate={{
          left: isOpen ? 0 : -48,
        }}
      >
        <div className="flex">
          <div className="left-col">
            <div className="scroll">
              <AddPage className="icon" onClick={loadData} />
              <Comment className="icon" />
              <Highlight className="icon" />
              <Copy className="icon" />
              <Save className="icon" onClick={saveData} />
              <Delete className="icon" onClick={clearData} />
              <Export className="icon" />
              <Setting className="icon" />
            </div>
          </div>
          <div className="right-col" onClick={performAction}>
            <div className="buttoncustom">
              <SepLine />
            </div>
          </div>
        </div>
      </motion.div>
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
    </div>
  );
};

export default Editing;
