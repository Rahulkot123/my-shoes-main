import React from "react";
import './login.css'

export default function Login(){
    return(
        <div>

            <div className="benfits">
                <h2>With an Account You Can:</h2>
                <p>Get Latest news On MyShoes</p>
                <p>Access Saved Items</p>
                <p>Free Click & Collect </p>
                <p>Manage and Track Items</p>

            </div>




            <div className="Container">
                <label for= "Email"><b>Email*</b></label>
                <input type="text" placeholder="Enter Email "></input>

                <label for= "Password"><b>Password*</b></label>
                <input type="text" placeholder="Enter Password "></input>

                <button type="Submit"> Login</button>
 
                    <span className="psw">  <a href="email">Forgot Password</a></span>
                     
                      <span >  <a href="signup">Create An Account</a></span>           
            </div>
                

            <footer className='homefooter'>
            
            <p>phone number</p>
            <p>Address</p>
            <p>harrowstore@myshoes.com</p>
            
        
        </footer>

        </div>



    )
}