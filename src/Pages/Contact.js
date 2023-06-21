import React from "react";
import '../Pages/contact.css'

export default function Contact(){
    return(
        

        <div className="Contact">
            <h2>Find Out Where We Are Based & Our Opening Times</h2>
            <div className="map">

            
            <iframe
                width="800"
                height="650"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAyYTmt0a7P7vDfsbeb7UcjYIJvEaoNEsY
                &q=St Anns Shopping Centre,%2035-37%20St%20Anns%20Rd,%20Harrow%20HA1%201JU">

            </iframe>

            
</div>

            <div classname="Feebackform">
        
            <div className="First">
                    <label for="Text"><b>First Name</b></label>
                    <input type="Text" placeholder="First Name" name="First Name" required/>
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

            </div>

            <h1> Opening Times </h1>
            <div className="openingtimes2">
            
            <h2>Monday:    9:00-17:00</h2>
            <h2>Tuesday:    9:00-17:00</h2>
            <h2>Wednesday:  9:00-17:00</h2>
            <h2>Thursday:   9:00-17:00</h2>
            <h2>Friday:     9:00-17:00</h2>
            <h2>Saturday:   10:00-19:00</h2>
            <h2>Sunday:     11:00-16:00</h2>
            </div>
            
        </div>



    )
}