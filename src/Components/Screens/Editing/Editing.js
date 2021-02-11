import React, { useState } from "react";
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
  return (
    <motion.div
      className="container"
      animate={{
        left: isOpen ? 0 : -48,
      }}
    >
      <div className="flex">
        <div className="left-col">
          <AddPage className="icon" />
          <Comment className="icon" />
          <Highlight className="icon" />
          <Copy className="icon" />
          <Save className="icon" />
          <Delete className="icon" />
          <Export className="icon" />
          <Setting className="icon" />
        </div>
        <div className="right-col" onClick={performAction}>
          <div className="buttoncustom">
            <SepLine />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Editing;
