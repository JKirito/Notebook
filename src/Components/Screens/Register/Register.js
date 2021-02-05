import React from "react";
import "./Register.css";
function Register(){
	return(
		<div className="Register">
			
				<div className="container">
           			<h1>Registration</h1>
           			<div className="inputcontainer">
          				<label htmlFor="Full Name" className="text">
          					Full Name
         				</label>
          				<input type="text"/>
        			</div>
        			<div className="inputcontainer">
          				<label htmlFor="Phone No." className="number">
          					Phone no.
         				</label>
          				<input type="text"/>
        			</div>
					<div className="inputcontainer">
          				<label htmlFor="E-mail" className="text">
          					Phone no.
         				</label>
          				<input type="text" id="E-mail"/>
        			</div>
        			<button className="proceed">Proceed</button>


		);
}
export default Register;