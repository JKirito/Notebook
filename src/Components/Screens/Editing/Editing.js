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
import { ReactComponent as Left } from "../Editing/Left.svg";
import { ReactComponent as Right } from "../Editing/Right.svg";
import { ReactComponent as Load } from "../Editing/Load.svg";
// import backgroundImage from "../Editing/Background.svg";
import TestImage1 from "../Editing/Test.PNG";
import TestImage2 from "../Editing/Test2.PNG";
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

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const [brushSize, setBrushSize] = useState(10);

  // Canvas Refrence
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
  const undoData = () => {
    saveableCanvas.current.undo();
  };
  const incrementPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const decrementPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const brushSlideChange = (e) => {
    console.log("Working", e.target.value);
    setBrushSize(e.target.value);
  };
  // const decrementPage = () => {};

  // References of All the Available Canvas

  const canvasMainDataHolder = document.querySelector(
    "#root > div > div > div > div > div.imageStyles > canvas:nth-child(2)"
  );
  const canvasBackgroundDataHolder = document.querySelector(
    "#root > div > div > div > div > div.imageStyles > canvas:nth-child(4)"
  );

  async function exportDataFromCanvas() {
    let link = document.getElementById("link");
    link.setAttribute("download", "example.png");
    link.setAttribute("href", canvasMainDataHolder.toDataURL("image/png"));
    link.click();

    // let backgroundDataURL = canvasBackgroundDataHolder.toDataURL("image/png");
    // let foregroundDataURL = canvasMainDataHolder.toDataURL("image/png");
    // testComposition(backgroundDataURL, foregroundDataURL);
  }

  // TODO: Better Composition Function But Not Working

  function testComposition(background, foreground) {
    let fore = new Image();
    let back = new Image();
    const tempcanvas = document.createElement("canvas");
    tempcanvas.width = dimensions.width;
    tempcanvas.height = dimensions.height;
    let tempctx = tempcanvas.getContext("2d");
    // back.onload = function () {
    tempctx.drawImage(back, 0, 0, dimensions.width, dimensions.height);
    // };
    // fore.onload = function () {
    tempctx.drawImage(fore, 0, 0, dimensions.width, dimensions.height);
    // };
    fore.src = foreground;
    back.src = background;
    let link = document.getElementById("link");
    link.setAttribute("download", "example.png");
    link.setAttribute("href", tempcanvas.toDataURL("image/png"));
    link.click();
  }

  // TODO: Have to make this whole Functionality Again => Bugged Right Now
  // Composition Functionalites

  function compositeImage() {
    // let canvastempref = document.querySelector(
    //   "#root > div > div > div > div > div.imageStyles > canvas:nth-child(3)"
    // );
    let currentCanvas = saveableCanvas.current.ctx.drawing.canvas;
    let ctx = currentCanvas.getContext("2d");
    // console.log(ctx);
    // ctx.canvas.drawImage(TestImage1, 0, 0);
    ctx.globalAlpha = 1;
    // ctx.drawImage(TestImage2, 0, 0);

    // Canvas 4 => Containing Background
    const backImage = document.querySelector(
      "#root > div > div > div > div > div.imageStyles > canvas:nth-child(4)"
    );
    // console.log(backImage);
    const backImageContext = backImage.getContext("2d");

    // These Are Both Base64 Image Data URL's

    let backImageDataURL = backImage.toDataURL("image/png");
    let drawingCanvasDataURL = currentCanvas.toDataURL("image/png");
    // const drawingbase64img = drawingCanvasDataURL;
    // const drawingbase64img = drawingCanvasDataURL.replace(
    //   /^data:image\/(png|jpg);base64,/,
    //   ""
    // );
    const imageData = backImageContext.getImageData(
      0,
      0,
      dimensions.width,
      dimensions.height
    );
    // ctx.putImageData(imageData, dimensions.width, dimensions.height);
    const drawnData = ctx.getImageData(
      0,
      0,
      dimensions.width,
      dimensions.height
    );
    // console.log(drawnData);
    backImageContext.putImageData(
      drawnData,
      dimensions.width,
      dimensions.height
    );
    // Canvas 2 => Having Drawn Data
    drawingCanvasDataURL = document
      .querySelector(
        "#root > div > div > div > div > div.imageStyles > canvas:nth-child(2)"
      )
      .toDataURL("image/png");
    // console.log(backImageDataURL);
    // console.log(drawingCanvasDataURL);
    combineImage(drawingCanvasDataURL, backImageDataURL);
  }

  function combineImage(drawingData, backImageData) {
    var canvas = document.createElement("canvas");
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    var ctx = canvas.getContext("2d");
    let img1 = new Image();
    img1.width = dimensions.width;
    img1.height = dimensions.height;
    let img2 = new Image();
    img2.width = dimensions.width;
    img2.height = dimensions.height;
    img1.src = drawingData;
    img2.src = backImageData;

    canvas.width = img1.width;
    canvas.height = img1.height;
    ctx.drawImage(img2, 0, 0);
    // canvas.toDataURL("image/jpeg");
    ctx.drawImage(img1, 0, 0);
    // autoDownloadCanvas(canvas);

    canvas.toBlob(function (blob) {
      console.log("blob", blob);
      let img3 = new Image();
      img3.src = URL.createObjectURL(blob);

      let link = document.getElementById("link");
      link.setAttribute("download", "example.png");
      link.setAttribute("href", canvas.toDataURL("image/png"));
      link.click();
    });

    // img.src = URL.createObjectURL(event.target.files[0]);
    // img.setAttribute("src", imagedata);
    // console.log(img);
    // ctx.drawImage(TestImage1, dimensions.width, dimensions.height);
    // ctx.drawImage(img, 0, 0);
    // var dataURL = canvas.toDataURL("image/png");
    // canvas.remove();
  }

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
              <AddPage className="icon" />
              <Load className="icon" onClick={loadData} />
              {/* <Comment className="icon" /> */}
              <Highlight className="icon" />
              <Copy className="icon" onClick={undoData} />
              <Save className="icon" onClick={saveData} />
              <Delete className="icon" onClick={clearData} />
              <Export className="icon" onClick={exportDataFromCanvas} />
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
        className="imageStyles"
        ref={saveableCanvas}
        hideGrid={true}
        canvasWidth={dimensions.width}
        canvasHeight={dimensions.height}
        hideInterface={true}
        loadTimeOffset={2}
        lazyRadius={5}
        brushRadius={2}
        // imgSrc={TestImage1}
      />
      <div className="navigationContainer">
        <div className="iconsmall" onClick={decrementPage}>
          <Left />
        </div>
        <div className="textColorTheme">
          {currentPage} / {totalPage}
        </div>
        <div className="iconsmall" onClick={incrementPage}>
          <Right />
        </div>
      </div>
      <motion.div
        className="modalContainer"
        animate={{
          display: "none",
        }}
      >
        <div className="modalBox">
          <p>Customize Brush</p>
          <p>Styler</p>
          <div className="stylerContainer">
            <div className="bigCircle">
              <div
                className="smallCircle"
                style={{
                  width: brushSize + "px",
                  height: brushSize + "px",
                }}
              ></div>
            </div>
            <input
              type="range"
              min={0}
              max={50}
              step={1}
              className="slider"
              onChange={brushSlideChange}
            />
          </div>
        </div>
      </motion.div>
      <a id="link"></a>
    </div>
  );
};

export default Editing;
