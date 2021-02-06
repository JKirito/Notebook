import React from "react";
import "./Register.css";
function Register(){
	return(
		<div className="Register">
			<p className="para">Step 1 of 2</p>
				<div className="container">
           			<h1>Registration</h1>
           			<div className="inputcontainer">
          				<label htmlFor="Full Name" className="text">
          					Full Name
         				</label>
          				<input type="text"/>
        			</div>
        			<div className="inputcontainer">
          				<div class Name="inside input">
          					<label htmlFor="Phone No." className="text">
          						Phone no.
         					</label>
          					<input type="tel"/>
          				</div>
          				<div className="insideinput">
          				<label htmlFor="DOB" className="text">
          					DOB
         				</label>
          				<input type="date"/>
          				</div>
        			</div>
					<div className="inputcontainer">
          				<label htmlFor="E-mail" className="text">
          					E-mail
         				</label>
          				<input type="email"/>
        			</div>
        			<button className="proceed">Proceed</button>
        			<div className="slidecontainer">
        				<div className="slide1" />
        				<div className="slide2" />
        			</div>
        	</div>
       </div> 			
		);
}
export default Register;