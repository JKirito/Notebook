import React from "react";
import "./Createdoc.css";
function Createdoc(){
	return(
    <div className="Createdoc">
        <div className="container">
                <h1>Create Document</h1>
                <div className="inputcontainer">
                  <label htmlFor="Document Name" className="text">
                    Document Name
                  </label>
                  <input type="text"/>
              </div>
              <div className="inputcontainer">
                    <label htmlFor="No of page" className="text">
                      No of page
                    </label>
                    <input type="number"/>
                  <label htmlFor="Date" className="text">
                    Date
                  </label>
                  <input type="date"/>
              </div>
              <div className="check1">
              <input type="checkbox" Name="Auto Save" Value="Auto Save"/>
              <label htmlfor="Auto Save">Auto Save</label>
              </div>
              <button className="Create">Create</button>
          </div>
       </div>
		);
}
export default Createdoc;