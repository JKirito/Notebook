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

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

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
  // const undoData = () => {
  //   saveableCanvas.current.undo();
  // };
  async function autoDownloadCanvas() {
    let link = document.getElementById("link");
    link.setAttribute("download", "example.png");
    link.setAttribute(
      "href",
      document
        .querySelector(
          "#root > div > div > div > div > div.imageStyles > canvas:nth-child(4)"
        )
        .toDataURL("image/png")
    );
    link.click();
  }

  function compositeImage() {
    // let canvastempref = document.querySelector(
    //   "#root > div > div > div > div > div.imageStyles > canvas:nth-child(3)"
    // );
    let currentCanvas = saveableCanvas.current.ctx.drawing.canvas;
    let ctx = currentCanvas.getContext("2d");
    console.log(ctx);
    // ctx.canvas.drawImage(TestImage1, 0, 0);
    ctx.globalAlpha = 1;
    // ctx.drawImage(TestImage2, 0, 0);

    // Canvas 4 => Containing Background
    const backImage = document.querySelector(
      "#root > div > div > div > div > div.imageStyles > canvas:nth-child(4)"
    );
    console.log(backImage);
    const backImageContext = backImage.getContext("2d");
    var drawingCanvasDataURL = currentCanvas.toDataURL("image/png");
    const drawingbase64img = drawingCanvasDataURL;
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
    console.log(drawnData);
    backImageContext.putImageData(
      drawnData,
      dimensions.width,
      dimensions.height
    );
    // Canvas 2 => Having Drawn Data
    // document.querySelector(
    //   "#root > div > div > div > div > div.imageStyles > canvas:nth-child(2)"
    // );
    // console.log(drawingbase64img);
    combineImage(drawingbase64img, drawnData);
  }

  function combineImage(imagedata, drawnData) {
    console.log(TestImage1);
    var canvas = document.createElement("canvas");
    // canvas.width = imagedata.width;
    // canvas.height = imagedata.height;
    var ctx = canvas.getContext("2d");
    let img1 = new Image();
    img1.width = dimensions.width;
    img1.height = dimensions.height;
    let img2 = new Image();
    img2.width = dimensions.width;
    img2.height = dimensions.height;
    img1.src = drawnData;
    img1.onload = function () {
      canvas.width = img1.width;
      canvas.height = img1.height;

      ctx.drawImage(img1, 0, 0);

      canvas.toDataURL("image/jpeg");
    };
    img2.onload = function () {
      canvas.width = img2.width;
      canvas.height = img2.height;

      ctx.drawImage(img2, 0, 0);

      canvas.toDataURL("image/jpeg");
    };
    canvas.toBlob(function (blob) {
      // console.log("blob", blob);
      img1.src = URL.createObjectURL(blob);
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
              <AddPage className="icon" onClick={loadData} />
              <Comment className="icon" />
              <Highlight className="icon" />
              <Copy className="icon" onClick={compositeImage} />
              <Save className="icon" onClick={saveData} />
              <Delete className="icon" onClick={clearData} />
              <Export className="icon" onClick={autoDownloadCanvas} />
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
        loadTimeOffset={10}
        lazyRadius={5}
        brushRadius={2}
        imgSrc={TestImage1}
      />
      <div className="navigationContainer">
        <div className="iconsmall">
          <AddPage />
        </div>
        <div className="textColorTheme">
          {currentPage} / {totalPage}
        </div>
        <div className="iconsmall">
          <AddPage />
        </div>
      </div>
      <a id="link"></a>
    </div>
  );
};

export default Editing;
