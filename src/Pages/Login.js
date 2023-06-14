import React from "react";
import './login.css'

export default function Login(){
    return(
<div >

    <div className="benfits">
        <h2>With an Account You Can:</h2>
        <p>Get Latest news On MyShoes</p>
        <p>Access Saved Items</p>
        <p>Free Click & Collect </p>
        <p>Manage and Track Items</p>
        </div>

    
       
        

<div className="Login">
     <h1>Login</h1>
    <label for="Email"><b>Email</b></label>
    <input type="Email" placeholder="Enter Email" name="email" required/>
        
    <label for="Password"><b>Password</b></label>
    <input type="Password" placeholder="Enter Password" name="Password" required/>
    <button><span><a href="/">Sign In</a></span></button>
</div>


 


    




    
    

</div>



    )
}