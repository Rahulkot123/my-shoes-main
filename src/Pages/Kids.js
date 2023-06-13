import React from "react";
import './Kids.css'
import Sortby from "../Components/sortby";
import Filters from "../Components/Filters";

export default function Kids() {
    return(
<div>
    
    <div className='bannar'></div>
    <Sortby/>
    <Filters/>

    <div className="Content">
        <img src={ require('../Photos/Offers1.webp')} alt='offers product 1'></img>
        <img src={ require('../Photos/offers2.webp')} alt='offers product 2 '></img>
        <img src={ require('../Photos/offers3.webp')} alt='offers product 3 '></img>
        <img src={ require('../Photos/offers4.webp')} alt='offers product 3 '></img>
    </div>

    <div className="Content">
        <img src={ require('../Photos/offers5.webp')} alt='offers product 3 '></img>
        <img src={ require('../Photos/offers6.webp')} alt='offers product 3 '></img>
        <img src={ require('../Photos/offers7.webp')} alt='offers product 3 '></img>
        <img src={ require('../Photos/offers8.webp')} alt='offers product 3 '></img>
   </div>

</div>
    )

}