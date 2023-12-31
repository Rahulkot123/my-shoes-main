import React from "react";
import './Women.css'
import './Offers.css';
import Sortby from "../Components/sortby";
import Filters from "../Components/Filters";

export default function Women() {
    return(
    <div className="Women"> 
    
    <div className='bannar'>
    <img src={ require('../Photos/womanbannar.png')} alt='offers product 1'></img>

    </div>
    <Sortby/>
    <Filters/>


    <div className="Content">
        <img src={ require('../Photos/women1.webp')} alt='offers product 1'></img>
        <img src={ require('../Photos/women2.webp')} alt='offers product 2 '></img>
        <img src={ require('../Photos/woman3.webp')} alt='offers product 3 '></img>
        <img src={ require('../Photos/woman4.webp')} alt='offers product 4 '></img>
    </div>

    <div className="Content">
        <img src={ require('../Photos/woman5.webp')} alt='offers product 5 '></img>
        <img src={ require('../Photos/Women6.webp')} alt='offers product 6 '></img>
        <img src={ require('../Photos/woman7.webp')} alt='offers product 7 '></img>
        <img src={ require('../Photos/woman8.webp')} alt='offers product 8 '></img>
   </div>
        </div>


    );
}