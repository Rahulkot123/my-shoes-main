import React from "react";
import './Accessories.css'
import './Offers.css'
import Sortby from "../Components/sortby";
import Filters from "../Components/Filters";

export default function Accessories (){
    return(
<div>
    <div className='bannar'></div>
    <Sortby/>
    <Filters/>
   
    <div className="Content">
        <img src={ require('../Photos/ac1.webp')} alt='offers product 2 '></img>
        <img src={ require('../Photos/ac2.webp')} alt='offers product 1'></img>
        <img src={ require('../Photos/ac3.webp')} alt='offers product 3 '></img>
        <img src={ require('../Photos/ac4.webp')} alt='offers product 3 '></img>
    </div>

    <div className="Content">
        <img src={ require('../Photos/ac5.webp')} alt='offers product 3 '></img>
        <img src={ require('../Photos/ac6.jpg')} alt='offers product 3 '></img>
        <img src={ require('../Photos/ac7.jpg')} alt='offers product 3 '></img>
        <img src={ require('../Photos/ac8.jpg')} alt='offers product 3 '></img>
   </div>
    


</div>
    )
}