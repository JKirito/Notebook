import React from "react";
import "./Register2.css";
function Register2(){
	return(
		<div className="Register2">
			<p><strong>Step 2 of 2</strong></p>	
				<div className="container">
           			<h1>Registration</h1>
           			<div className="inputcontainer">
          				<label htmlFor="New Password" className="text">
          					New Password
         				</label>
         				<input type="password"/>
         			</div>
         			<div className="inputcontainer">
          				<label htmlFor="Confirm Password" className="text">
          					Confirm Password
         				</label>
         				<input type="password"/>
         			</div>
         			<button className="createaccount">Create Account</button>
        			<div className="slidecontainer">
        				<div className="slide1" />
        				<div className="slide2" />
        			</div>
         		</div>	
        </div>			
		);
}
export default Register2;	
