import React from "react";
import './signup.css'


export default function Signup(){
    return(

<div>       
        <div className="Details">

    <label for="First Name"><b>First Name</b></label>
    <input type="text" placeholder="Enter First Name" name="First Name" required/>

    <label for="Surname"><b>Surname</b></label>
    <input type="text" placeholder="Enter Surname" name="Surname" required/>

    <label for="email"><b>Email</b></label>
    <input type="Email" placeholder="Enter Email" name="email" required/>

    <label for="Telphone"><b>Telphone</b></label>
    <input type="number" placeholder="Enter Telphone number" name="Telphone" required/>
    </div>

        <div className="info">
            <p>Please Enter a 8 Charecter Password Containing:</p>

            <p>1 uppercase</p>
            <p>1 Number</p>
            <p>1 Special charecter ( /,.!*)</p>

        </div>

    <div className="Password">
    <label for="Password"><b>Password</b></label>
    <input type="Password" placeholder="Enter Password" name="Password" required/>
    </div>

    <div className=" confirm Password">
    <label for="Password"><b>confirm Password</b></label>
    <input type="Password" placeholder="ReEnter Password" name="Confirm Password" required/>
    </div>

   

        </div>
    )
}