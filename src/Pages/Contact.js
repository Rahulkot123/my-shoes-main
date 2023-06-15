import React from "react";
import '../Pages/Contact.css'

export default function Contact(){
    return(
        

        <div >

            <div classname="Feebackform">
        
            <div className="First">
                    <label for="Email"><b>First Name</b></label>
                    <input type="text" placeholder="First Name" name="First Name" required/>
                </div>

                <div className="Email">
                    <label for="Email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required/>
                </div> 

                <div className="FeebackOrEnquiry ">
                    <label for="Feeback Or Enquiry"><b>Feeback Or Enquiry</b></label>
                    <input type="text" placeholder="Feeback Or Enquiry" name="Feeback Or Enquiry" required/>
                    <button><span><a href="/">Submit</a></span></button>
                </div> 

                

<iframe
width="600"
height="450"
loading="lazy"
allowFullScreen
referrerPolicy="no-referrer-when-downgrade"
src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAyYTmt0a7P7vDfsbeb7UcjYIJvEaoNEsY
&q=St Anns Shopping Centre,%2035-37%20St%20Anns%20Rd,%20Harrow%20HA1%201JU">

</iframe>
            

            </div>
            
        </div>



    )
}