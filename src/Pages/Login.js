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

     <div className="Email">
    <label for="Email"><b>Email</b></label>
    <input type="Email" placeholder="Enter Email" name="email" required/>
    </div>

    <div className="Password">
    <label for="Password"><b>Password</b></label>
    <input type="Password" placeholder="Enter Password" name="Password" required/>
    </div>


<div className="signin">
    <button><span><a href="/">Sign In</a></span></button>
</div>

<div className="Signup">
<button><span><a href="/Signup">Create An Account here</a></span></button>
</div>

<footer className='homefooter'>
    <h2> Follow Us On </h2>
    <img src={ require('../Photos/instagram.png')} alt=' intstagram '></img>
    <img src={ require('../Photos/facebook.png')} alt=' facebook '></img>
    <p>Phone:07569812345</p>
    <p> Address: HA1 1AT</p>
    <p>Email:harrowstore@myshoes.com</p>
                
</footer>

<div className="Promo">
    <h2>Want to Get 10% off your next order</h2>
    <label for="Email"><b>Email</b></label>
    <input type="Email" placeholder="Enter Email" name="email" required/>
    

</div>


    




    
    

</div>



    )
}