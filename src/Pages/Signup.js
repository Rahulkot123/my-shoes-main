import React from "react";
import './signup.css'


export default function Signup(){
    return(

<div className="signup">       


        <h1>Register Here</h1>


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

    <div className=" Confirm Password">
    <label for="Password"><b>Confirm Password</b></label>
    <input type="Password" placeholder="Re-Enter Password" name="Confirm Password" required/>
    
    <button><span><a href="/">Submit</a></span></button>
    </div>

    



   
 <footer className='homefooter'>
    <h2> Follow Us On </h2>
    <img src={ require('../Photos/instagram.png')} alt=' intstagram '></img>
    <img src={ require('../Photos/facebook.png')} alt=' facebook '></img>
    <p>Phone:07569812345</p>
    <p> Address: HA1 1AT</p>
    <p>Email:harrowstore@myshoes.com</p>
                
</footer>


    




        </div>
    )
}
