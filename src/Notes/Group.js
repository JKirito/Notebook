import React, { useState } from "react";
import "./Group.css";
function Savednote(){
	 const [isActive, setActive] = useState("false");
	 function myFunction(){
     setActive(!isActive);
	}
	return(
		<div>
			<div className={isActive ? null : "change" }>
				<div className="container1" onClick={myFunction}>
 					<div className="bar1"></div>
			    	<div className="bar2"></div>
  					<div className="bar3"></div>
  				</div>
  			</div>
  				<h2 className="Mhead">Groups</h2>
  				<div className="Gcontainers">
  					<div className="Gcontainer1"><h2>Mechanical Engineering</h2></div>
  					<div className="Gcontainer2"><h2>Civil Engineering</h2></div>
  				</div>
				<div className="cont">
					<div className="Shead"><h2>Files</h2></div>
					<div className="containers">
						<h2 className="content">Science</h2>
						<p className="content1">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<div className="containers">
						<h2 className="content">Maths</h2>
						<p className="content1">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.				
						</p>
					</div>
					<div className="containers">
						<h2 className="content">Home Science</h2>
						<p className="content1">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<button className="createnewdoc">+ &ensp;    Create New Document</button>
				</div>				
		</div>
		);
}
export default Savednote;